import { PAGE_ROUTES } from '@/shared/_constants/page'
import { HOST, PUBLISHER } from '../_constants'
import { LegalDocumentContent } from '../_types'
import {
  Email,
  Facts,
  OutLink,
  PageLink,
  Phone,
  Value
} from '../components/LegalText'

const DEVELOPER_URL = 'https://github.com/davidbourrel'

export const legalNotice: LegalDocumentContent = {
  fr: ({ address, siteHost }) => ({
    intro: (
      <p>
        Ces informations identifient l&apos;éditeur et l&apos;hébergeur du site
        des Cabanes de la Reynie ({siteHost}), comme le prévoit la loi pour la
        confiance dans l&apos;économie numérique.
      </p>
    ),
    sections: [
      {
        id: 'editeur',
        title: 'Éditeur du site',
        body: (
          <Facts
            items={[
              [
                'Nom ou raison sociale',
                <Value key='n'>{PUBLISHER.name}</Value>
              ],
              [
                'Forme juridique',
                <Value key='s'>{PUBLISHER.legalStatus}</Value>
              ],
              ['SIRET', <Value key='i'>{PUBLISHER.siret}</Value>],
              [
                'Adresse du siège ou du domicile',
                <Value key='a'>{PUBLISHER.address}</Value>
              ],
              ['Téléphone', <Phone key='p' address={address} />],
              ['E-mail', <Email key='e' address={address} />]
            ]}
          />
        )
      },
      {
        id: 'directeur-publication',
        title: 'Directeur de la publication',
        body: (
          <p>
            <Value>{PUBLISHER.publicationDirector}</Value>, joignable aux
            coordonnées ci-dessus.
          </p>
        )
      },
      {
        id: 'hebergement',
        title: 'Hébergement',
        body: (
          <Facts
            items={[
              ['Nom', HOST.name],
              ['Adresse', `${HOST.address}, États-Unis`],
              ['Téléphone', <Value key='t'>{HOST.phone}</Value>],
              [
                'Contact',
                <OutLink key='c' href={HOST.contactUrl}>
                  vercel.com/contact
                </OutLink>
              ]
            ]}
          />
        )
      },
      {
        id: 'conception',
        title: 'Conception et développement',
        body: (
          <p>
            Site conçu et développé par{' '}
            <OutLink href={DEVELOPER_URL}>David Bourrel</OutLink>.
          </p>
        )
      },
      {
        id: 'propriete-intellectuelle',
        title: 'Propriété intellectuelle',
        body: (
          <p>
            Les textes, les photographies et le logo de ce site sont protégés
            par le droit d&apos;auteur. Leur reproduction ou leur réutilisation,
            même partielle, demande l&apos;accord écrit préalable de
            l&apos;éditeur.
          </p>
        )
      },
      {
        id: 'donnees-personnelles',
        title: 'Données personnelles',
        body: (
          <p>
            L&apos;usage de vos données et vos droits sont détaillés dans la{' '}
            <PageLink href={PAGE_ROUTES.legal.privacy}>
              politique de confidentialité
            </PageLink>
            .
          </p>
        )
      }
    ]
  }),

  en: ({ address, siteHost }) => ({
    intro: (
      <p>
        This information identifies the publisher and the host of the Les
        Cabanes de la Reynie website ({siteHost}), as French law requires.
      </p>
    ),
    sections: [
      {
        id: 'publisher',
        title: 'Publisher',
        body: (
          <Facts
            items={[
              ['Name or company name', <Value key='n'>{PUBLISHER.name}</Value>],
              ['Legal form', <Value key='s'>{PUBLISHER.legalStatus}</Value>],
              ['SIRET number', <Value key='i'>{PUBLISHER.siret}</Value>],
              [
                'Registered address',
                <Value key='a'>{PUBLISHER.address}</Value>
              ],
              ['Phone', <Phone key='p' address={address} />],
              ['Email', <Email key='e' address={address} />]
            ]}
          />
        )
      },
      {
        id: 'publication-director',
        title: 'Publication director',
        body: (
          <p>
            <Value>{PUBLISHER.publicationDirector}</Value>, who can be reached
            at the details above.
          </p>
        )
      },
      {
        id: 'hosting',
        title: 'Hosting',
        body: (
          <Facts
            items={[
              ['Name', HOST.name],
              ['Address', `${HOST.address}, United States`],
              ['Phone', <Value key='t'>{HOST.phone}</Value>],
              [
                'Contact',
                <OutLink key='c' href={HOST.contactUrl}>
                  vercel.com/contact
                </OutLink>
              ]
            ]}
          />
        )
      },
      {
        id: 'design',
        title: 'Design and development',
        body: (
          <p>
            Website designed and developed by{' '}
            <OutLink href={DEVELOPER_URL}>David Bourrel</OutLink>.
          </p>
        )
      },
      {
        id: 'intellectual-property',
        title: 'Intellectual property',
        body: (
          <p>
            The texts, photographs and logo of this website are protected by
            copyright. Reproducing or reusing them, even in part, requires the
            publisher&apos;s prior written consent.
          </p>
        )
      },
      {
        id: 'personal-data',
        title: 'Personal data',
        body: (
          <p>
            How your data is used and what your rights are is set out in the{' '}
            <PageLink href={PAGE_ROUTES.legal.privacy}>privacy policy</PageLink>
            .
          </p>
        )
      }
    ]
  })
}
