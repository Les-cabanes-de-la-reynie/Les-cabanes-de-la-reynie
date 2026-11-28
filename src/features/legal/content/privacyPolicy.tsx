import { PAGE_ROUTES } from '@/shared/_constants/page'
import { PUBLISHER } from '../_constants'
import { LegalDocumentContent } from '../_types'
import { Email, List, OutLink, PageLink, Value } from '../components/LegalText'

const VERCEL_PRIVACY_URL = 'https://vercel.com/legal/privacy-notice'
const MAPBOX_PRIVACY_URL = 'https://www.mapbox.com/legal/privacy'

export const privacyPolicy: LegalDocumentContent = {
  fr: ({ address }) => ({
    intro: (
      <p>
        En bref&nbsp;: ce site n&apos;a ni formulaire ni compte pour ses
        visiteurs, ni mesure d&apos;audience, ni publicité, et ne dépose aucun
        cookie chez eux. Voici les quelques données techniques qui circulent
        quand vous le consultez, et vos droits.
      </p>
    ),
    sections: [
      {
        id: 'responsable',
        title: 'Responsable du traitement',
        body: (
          <p>
            Le responsable du traitement est l&apos;éditeur du site,{' '}
            <Value>{PUBLISHER.name}</Value>, <Value>{PUBLISHER.address}</Value>.
            Pour toute question sur vos données&nbsp;:{' '}
            <Email address={address} />.
          </p>
        )
      },
      {
        id: 'visite',
        title: 'Quand vous visitez le site',
        body: (
          <p>
            Chaque visite passe par les serveurs de notre hébergeur, Vercel, qui
            reçoit votre adresse IP, le type de navigateur et la page demandée
            pour afficher le site et le protéger des abus. Ces journaux
            techniques sont conservés par Vercel pour une durée limitée, selon
            sa{' '}
            <OutLink href={VERCEL_PRIVACY_URL}>
              politique de confidentialité
            </OutLink>
            . Base légale&nbsp;: notre intérêt légitime à faire fonctionner un
            site sûr (article 6.1.f du RGPD).
          </p>
        )
      },
      {
        id: 'carte',
        title: 'La carte de la page Nous trouver',
        body: (
          <p>
            Les fonds de la carte sont chargés depuis Mapbox&nbsp;: comme pour
            toute image hébergée ailleurs, votre navigateur lui transmet votre
            adresse IP et des informations techniques. Le site ne dépose aucun
            cookie pour l&apos;afficher. Base légale&nbsp;: notre intérêt
            légitime à vous montrer où se trouve le lieu. Voir la{' '}
            <OutLink href={MAPBOX_PRIVACY_URL}>
              politique de confidentialité de Mapbox
            </OutLink>
            .
          </p>
        )
      },
      {
        id: 'itineraire',
        title: 'Itinéraire et position',
        body: (
          <p>
            Quand vous ouvrez la fenêtre d&apos;itinéraire, votre navigateur
            vous demande l&apos;autorisation de partager votre position. Si vous
            acceptez, elle reste dans votre navigateur et sert seulement à
            préparer un lien Google Maps vers les Cabanes&nbsp;: elle n&apos;est
            ni envoyée à nos serveurs, ni conservée. Google ne la reçoit que si
            vous ouvrez ce lien. Si vous refusez, seul ce lien n&apos;est pas
            proposé.
          </p>
        )
      },
      {
        id: 'liens',
        title: "Liens vers d'autres sites",
        body: (
          <p>
            En suivant un lien vers Airbnb, Google Maps ou un autre service,
            vous quittez le site&nbsp;: la politique de confidentialité de ce
            service s&apos;applique.
          </p>
        )
      },
      {
        id: 'cookies',
        title: 'Cookies et stockage local',
        body: (
          <>
            <p>
              Le site ne dépose aucun cookie de mesure d&apos;audience, de
              publicité ou de réseau social&nbsp;: aucun bandeau de consentement
              n&apos;est donc nécessaire.
            </p>
            <List>
              <li>
                Votre choix de thème clair ou sombre est gardé dans le stockage
                local de votre navigateur (clé «&nbsp;theme&nbsp;»)&nbsp;; il ne
                quitte pas votre appareil, et vous pouvez l&apos;effacer depuis
                les réglages de votre navigateur.
              </li>
              <li>
                Un cookie de session est déposé uniquement quand
                l&apos;exploitant se connecte à l&apos;espace
                propriétaire&nbsp;; il est indispensable à cette connexion.
              </li>
            </List>
          </>
        )
      },
      {
        id: 'espace-proprietaire',
        title: 'Espace propriétaire',
        body: (
          <p>
            Le seul compte du site est celui de l&apos;exploitant. Pour sa
            connexion, nous conservons son adresse e-mail, son mot de passe sous
            forme hachée et, pour chaque session, l&apos;adresse IP et le
            navigateur utilisés, jusqu&apos;à l&apos;expiration de la session
            (au bout de sept jours sans activité). Ces données et les contenus
            modifiables du site (prix, horaires, coordonnées) sont stockés dans
            une base de données hébergée par Neon&nbsp;; les photos sont
            stockées chez UploadThing.
          </p>
        )
      },
      {
        id: 'transferts',
        title: 'Destinataires et transferts',
        body: (
          <p>
            Vos données ne sont ni vendues ni cédées. Les prestataires cités
            (Vercel, Mapbox, Neon, UploadThing) peuvent les traiter hors de
            l&apos;Union européenne, notamment aux États-Unis, avec les
            garanties prévues par le RGPD&nbsp;; Vercel, par exemple, est
            certifié au Data Privacy Framework entre l&apos;Union européenne et
            les États-Unis.
          </p>
        )
      },
      {
        id: 'droits',
        title: 'Vos droits',
        body: (
          <p>
            Vous pouvez accéder à vos données, les faire rectifier ou effacer,
            en limiter le traitement ou vous y opposer, et demander leur
            portabilité&nbsp;: écrivez-nous à <Email address={address} />. Si
            vous estimez que vos droits ne sont pas respectés, vous pouvez
            adresser une réclamation à la CNIL (
            <OutLink href='https://www.cnil.fr/fr/plaintes'>cnil.fr</OutLink>).
          </p>
        )
      },
      {
        id: 'evolution',
        title: 'Évolution de cette politique',
        body: (
          <p>
            Cette politique évolue avec le site&nbsp;; la date de dernière mise
            à jour figure en haut de page. Voir aussi les{' '}
            <PageLink href={PAGE_ROUTES.legal.terms}>
              conditions d&apos;utilisation
            </PageLink>
            .
          </p>
        )
      }
    ]
  }),

  en: ({ address }) => ({
    intro: (
      <p>
        In short: this website has no forms or accounts for its visitors, no
        analytics and no advertising, and sets no cookies on their devices. Here
        is the little technical data involved when you browse it, and what your
        rights are.
      </p>
    ),
    sections: [
      {
        id: 'controller',
        title: 'Data controller',
        body: (
          <p>
            The data controller is the website&apos;s publisher,{' '}
            <Value>{PUBLISHER.name}</Value>, <Value>{PUBLISHER.address}</Value>.
            For any question about your data: <Email address={address} />.
          </p>
        )
      },
      {
        id: 'visits',
        title: 'When you visit the website',
        body: (
          <p>
            Every visit goes through the servers of our host, Vercel, which
            receives your IP address, your browser type and the page requested,
            in order to display the website and protect it from abuse. Vercel
            keeps these technical logs for a limited time, under its{' '}
            <OutLink href={VERCEL_PRIVACY_URL}>privacy notice</OutLink>. Legal
            basis: our legitimate interest in running a secure website (article
            6(1)(f) GDPR).
          </p>
        )
      },
      {
        id: 'map',
        title: 'The map on the Find us page',
        body: (
          <p>
            The map tiles are loaded from Mapbox: as with any image hosted
            elsewhere, your browser sends it your IP address and technical
            information. The website sets no cookie to display it. Legal basis:
            our legitimate interest in showing you where the place is. See{' '}
            <OutLink href={MAPBOX_PRIVACY_URL}>
              Mapbox&apos;s privacy policy
            </OutLink>
            .
          </p>
        )
      },
      {
        id: 'directions',
        title: 'Directions and location',
        body: (
          <p>
            When you open the directions window, your browser asks for
            permission to share your location. If you agree, it stays in your
            browser and is only used to prepare a Google Maps link to the
            cabins: it is neither sent to our servers nor stored. Google only
            receives it if you open that link. If you decline, only that link is
            not offered.
          </p>
        )
      },
      {
        id: 'links',
        title: 'Links to other websites',
        body: (
          <p>
            When you follow a link to Airbnb, Google Maps or another service,
            you leave the website: that service&apos;s privacy policy applies.
          </p>
        )
      },
      {
        id: 'cookies',
        title: 'Cookies and local storage',
        body: (
          <>
            <p>
              The website sets no analytics, advertising or social media
              cookies, so no consent banner is needed.
            </p>
            <List>
              <li>
                Your choice of light or dark theme is kept in your
                browser&apos;s local storage (key “theme”); it never leaves your
                device, and you can clear it from your browser settings.
              </li>
              <li>
                A session cookie is set only when the operator signs in to the
                owner area; it is required for that sign-in.
              </li>
            </List>
          </>
        )
      },
      {
        id: 'owner-area',
        title: 'Owner area',
        body: (
          <p>
            The website&apos;s only account belongs to its operator. For that
            sign-in we keep their email address, their password in hashed form
            and, for each session, the IP address and browser used, until the
            session expires (after seven days of inactivity). This data and the
            website&apos;s editable content (prices, opening hours, contact
            details) are stored in a database hosted by Neon; photos are stored
            with UploadThing.
          </p>
        )
      },
      {
        id: 'transfers',
        title: 'Recipients and transfers',
        body: (
          <p>
            Your data is never sold or passed on. The providers named here
            (Vercel, Mapbox, Neon, UploadThing) may process it outside the
            European Union, notably in the United States, with the safeguards
            the GDPR provides for; Vercel, for instance, is certified under the
            EU-U.S. Data Privacy Framework.
          </p>
        )
      },
      {
        id: 'rights',
        title: 'Your rights',
        body: (
          <p>
            You can access your data, have it corrected or erased, restrict or
            object to its processing, and ask for its portability: write to us
            at <Email address={address} />. If you believe your rights are not
            respected, you can lodge a complaint with the French data protection
            authority, the CNIL (
            <OutLink href='https://www.cnil.fr/fr/plaintes'>cnil.fr</OutLink>),
            or with the authority of the country where you live.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        body: (
          <p>
            This policy changes with the website; the date of the last update is
            shown at the top of this page. See also the{' '}
            <PageLink href={PAGE_ROUTES.legal.terms}>terms of use</PageLink>.
          </p>
        )
      }
    ]
  })
}
