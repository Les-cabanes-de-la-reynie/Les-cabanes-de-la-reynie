import { PAGE_ROUTES } from '@/shared/_constants/page'
import { LegalDocumentContent } from '../_types'
import { PageLink } from '../components/LegalText'

export const termsOfUse: LegalDocumentContent = {
  fr: ({ siteHost }) => ({
    intro: (
      <p>
        Ces conditions générales d&apos;utilisation encadrent l&apos;accès au
        site des Cabanes de la Reynie ({siteHost}) et son usage. En le
        consultant, vous les acceptez.
      </p>
    ),
    sections: [
      {
        id: 'objet',
        title: 'Objet du site',
        body: (
          <p>
            Le site présente la yourte et la cabane des Cabanes de la Reynie, en
            Corrèze, ainsi que les activités alentour. Il est purement
            informatif&nbsp;: il ne vend rien et n&apos;enregistre aucune
            réservation.
          </p>
        )
      },
      {
        id: 'reservations',
        title: 'Réservations',
        body: (
          <p>
            Les réservations se font sur Airbnb, selon les conditions de cette
            plateforme. Les prix, les disponibilités et les conditions
            d&apos;annulation qui font foi sont ceux affichés sur Airbnb au
            moment de réserver&nbsp;; les prix indiqués ici le sont à titre
            indicatif.
          </p>
        )
      },
      {
        id: 'informations',
        title: 'Informations publiées',
        body: (
          <p>
            Descriptions, photos, horaires et prix sont tenus à jour avec soin,
            mais peuvent évoluer. Un doute avant votre séjour&nbsp;?
            Écrivez-nous ou appelez-nous aux coordonnées des{' '}
            <PageLink href={PAGE_ROUTES.legal.notice}>
              mentions légales
            </PageLink>
            .
          </p>
        )
      },
      {
        id: 'acces',
        title: 'Accès au site',
        body: (
          <p>
            Le site est accessible gratuitement, à tout moment, sauf
            interruption pour maintenance ou cas de force majeure.
            L&apos;éditeur ne peut garantir un accès continu ni l&apos;absence
            d&apos;erreur.
          </p>
        )
      },
      {
        id: 'propriete-intellectuelle',
        title: 'Propriété intellectuelle',
        body: (
          <p>
            Les contenus du site (textes, photographies, logo) sont protégés par
            le droit d&apos;auteur&nbsp;: toute reproduction sans autorisation
            écrite est interdite.
          </p>
        )
      },
      {
        id: 'liens',
        title: "Liens vers d'autres sites",
        body: (
          <p>
            Le site renvoie vers des services tiers, comme Airbnb pour réserver
            ou Google Maps pour l&apos;itinéraire. Leurs propres conditions
            s&apos;appliquent, et l&apos;éditeur n&apos;est pas responsable de
            leur contenu.
          </p>
        )
      },
      {
        id: 'espace-proprietaire',
        title: 'Espace propriétaire',
        body: (
          <p>
            L&apos;espace propriétaire, accessible depuis le pied de page, est
            réservé à l&apos;exploitant du site, seul titulaire d&apos;un
            compte&nbsp;: aucun compte ne peut être créé depuis le site. Tout
            accès ou tentative d&apos;accès non autorisé est interdit et puni
            par les articles 323-1 et suivants du Code pénal.
          </p>
        )
      },
      {
        id: 'donnees-personnelles',
        title: 'Données personnelles',
        body: (
          <p>
            Le traitement de vos données est décrit dans la{' '}
            <PageLink href={PAGE_ROUTES.legal.privacy}>
              politique de confidentialité
            </PageLink>
            .
          </p>
        )
      },
      {
        id: 'responsabilite',
        title: 'Responsabilité',
        body: (
          <p>
            L&apos;éditeur ne saurait être tenu responsable d&apos;un dommage
            lié à l&apos;utilisation du site, à son indisponibilité ou à un
            usage des informations publiées contraire à ces conditions.
          </p>
        )
      },
      {
        id: 'modification',
        title: 'Évolution des conditions',
        body: (
          <p>
            Ces conditions peuvent évoluer&nbsp;; la version en ligne, datée en
            haut de page, est celle qui s&apos;applique.
          </p>
        )
      },
      {
        id: 'droit-applicable',
        title: 'Droit applicable',
        body: (
          <p>
            Ces conditions sont soumises au droit français. En cas de litige,
            une solution amiable sera recherchée en priorité&nbsp;; à défaut,
            les tribunaux français seront compétents.
          </p>
        )
      }
    ]
  }),

  en: ({ siteHost }) => ({
    intro: (
      <p>
        These terms of use govern access to and use of the Les Cabanes de la
        Reynie website ({siteHost}). By browsing it, you accept them.
      </p>
    ),
    sections: [
      {
        id: 'purpose',
        title: 'Purpose of the website',
        body: (
          <p>
            The website presents the yurt and the cabin of Les Cabanes de la
            Reynie, in Corrèze, and the activities nearby. It is for information
            only: it sells nothing and takes no bookings.
          </p>
        )
      },
      {
        id: 'bookings',
        title: 'Bookings',
        body: (
          <p>
            Bookings are made on Airbnb, under that platform&apos;s terms. The
            prices, availability and cancellation terms that apply are those
            shown on Airbnb when you book; prices shown here are for guidance
            only.
          </p>
        )
      },
      {
        id: 'information',
        title: 'Published information',
        body: (
          <p>
            Descriptions, photos, opening hours and prices are kept up to date
            with care, but may change. Unsure about something before your stay?
            Write to us or call us using the details in the{' '}
            <PageLink href={PAGE_ROUTES.legal.notice}>legal notice</PageLink>.
          </p>
        )
      },
      {
        id: 'access',
        title: 'Access to the website',
        body: (
          <p>
            The website is free to access at any time, except during maintenance
            or in cases of force majeure. The publisher cannot guarantee
            uninterrupted or error-free access.
          </p>
        )
      },
      {
        id: 'intellectual-property',
        title: 'Intellectual property',
        body: (
          <p>
            The website&apos;s content (texts, photographs, logo) is protected
            by copyright: reproducing it without written permission is
            prohibited.
          </p>
        )
      },
      {
        id: 'links',
        title: 'Links to other websites',
        body: (
          <p>
            The website links to third-party services, such as Airbnb to book or
            Google Maps for directions. Their own terms apply, and the publisher
            is not responsible for their content.
          </p>
        )
      },
      {
        id: 'owner-area',
        title: 'Owner area',
        body: (
          <p>
            The owner area, reached from the footer, is reserved for the
            website&apos;s operator, who holds its only account: no account can
            be created on the website. Any unauthorised access or attempt to
            access it is prohibited and punishable under articles 323-1 and
            following of the French Criminal Code.
          </p>
        )
      },
      {
        id: 'personal-data',
        title: 'Personal data',
        body: (
          <p>
            How your data is processed is described in the{' '}
            <PageLink href={PAGE_ROUTES.legal.privacy}>privacy policy</PageLink>
            .
          </p>
        )
      },
      {
        id: 'liability',
        title: 'Liability',
        body: (
          <p>
            The publisher cannot be held liable for any damage arising from the
            use of the website, from its unavailability, or from a use of the
            published information that breaches these terms.
          </p>
        )
      },
      {
        id: 'changes',
        title: 'Changes to these terms',
        body: (
          <p>
            These terms may change; the version online, dated at the top of this
            page, is the one that applies.
          </p>
        )
      },
      {
        id: 'governing-law',
        title: 'Governing law',
        body: (
          <p>
            These terms are governed by French law. In the event of a dispute,
            an amicable solution will be sought first; failing that, the French
            courts will have jurisdiction.
          </p>
        )
      }
    ]
  })
}
