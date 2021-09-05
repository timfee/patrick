import Obfuscate from "react-obfuscate";
import Head from "next/head";

export const Home = () => (
  <div className="flex h-screen text-white bg-gray-900 font-serif">
    <Head>
      <title>PATRICK ALAN STUDIO</title>

      <meta name="title" content="PATRICK ALAN STUDIO" />
      <meta
        name="description"
        content="56 Wareham St Suite 206 • Boston, MA • 719.271.4574"
      />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="PATRICK ALAN STUDIO" />
      <meta property="og:url" content="https://patrickalanstudio.com/" />
      <meta
        property="og:image"
        content="https://patrickalanstudio.com/opengraph.png"
      />
      <meta
        property="business:contact_data:street_address"
        content="56 Wareham St Suite 206"
      />
      <meta property="business:contact_data:locality" content="Boston" />
      <meta property="business:contact_data:region" content="MA" />
      <meta property="business:contact_data:postal_code" content="02118" />
      <meta property="business:contact_data:country_name" content="USA" />
      <meta
        property="og:description"
        content="56 Wareham St Suite 206 • Boston, MA • 719.271.4574"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://patrickalanstudio.com/" />
      <meta property="twitter:title" content="PATRICK ALAN STUDIO" />
      <meta
        property="twitter:description"
        content="56 Wareham St Suite 206 • Boston, MA • 719.271.4574"
      />
      <meta
        property="twitter:image"
        content="https://patrickalanstudio.com/opengraph.png"
      />
    </Head>
    <main className="m-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://www.schema.org",
            "@type": "HairSalon",
            name: "Patrick Alan Studio",
            url: "https://patrickalanstudio.com/",
            priceRange: "$$$",
            image: ["https://patrickalanstudio.com/opengraph.png"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "56 Wareham St Suite 206",
              addressLocality: "Boston",
              addressRegion: "Massachusetts",
              postalCode: "02118",
              addressCountry: "United States",
            },
            telephone: "+1-719-271-4574",

            contactPoint: {
              "@type": "ContactPoint",
              contactType: "719-271-4574",
            },
          }),
        }}
      ></script>
      <h1 className="hidden">PATRICK ALAN STUDIO</h1>
      <svg
        width="331"
        height="43"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4"
      >
        <title>PATRICK ALAN STUDIO</title>
        <g fill="none" fill-fillRule="evenodd">
          <path stroke="#FFF" strokeWidth="6" d="M.513 36.59L166 37" />
          <path
            d="M11.95 26.025V25.7h-1.025c-1.45 0-2.025-.55-2.025-1.725V17.2c.425.175 1.025.3 1.8.3 4.75 0 7.625-2.375 7.625-5.95 0-2.725-2.525-5.525-6.7-5.525H.525v.3H1.65c.7 0 1.425.35 1.425 1.475v16.075c0 1.15-.525 1.825-1.7 1.825h-.85v.325H11.95zm-1.675-8.85c-.65 0-1.075-.15-1.375-.35v-10.5H10.365l.14.005c1.086.047 2.02.538 2.02 5.445 0 4.875-.65 5.4-2.25 5.4zM21.883 26v-.325h-.875c-1.4 0-2.675-1.05-2.675-3.125 0-.625.125-1.3.35-2.1l.85-2.85h5.35l2 6.35c.075.25.1.475.1.675 0 .65-.375 1.05-1.025 1.05h-1.475V26h11.45v-.325h-.975c-.675 0-1.15-.275-1.4-.975L27.358 6h-4.575l-4.375 13.925c-.8 2.575-2.275 5.75-4.35 5.75h-.475V26h8.3zm2.9-8.75h-5.15l2.55-8.05 2.6 8.05zM48.24 26v-.325h-1.55c-.6 0-1.1-.6-1.1-1.525V6.325h.375c2.6 0 5.8 4.35 5.8 7.35v.9h.25V6h-18.85v8.575h.275v-.75c0-3.425 3.725-7.5 5.95-7.5h.3V24.2c0 .8-.45 1.475-1.05 1.475h-1.95V26h11.55zm19.883.3c3.725 0 4.2-1.825 4.2-6.45h-.275c0 2.75-.3 5.1-1.3 5.1-.525 0-.775-.425-.775-1.275v-3.6c0-3.2-3.375-4.05-5.025-4.425v-.1c2.15-.575 5.2-1.925 5.2-4.725 0-2.75-2.25-4.8-8.65-4.8h-9.65v.3h1.225c.775 0 1.225.35 1.225 1.575v16.375c0 .925-.45 1.425-1.375 1.425h-1.05v.3h10.325v-.3h-1.175c-.675 0-1.1-.375-1.1-1.375V15.75h1.8c1.55 0 2.125.775 2.125 2.65 0 1.7-.125 2.625-.125 3.8 0 2.1 1.325 4.1 4.4 4.1zm-6.45-10.875h-1.75v-9.1h1.7c1.7 0 2.725.45 2.725 4.6 0 3.875-.625 4.5-2.675 4.5zM83.431 26v-.325h-1.225c-.725 0-1.625-.45-1.625-1.8V8.325c0-1.15.8-2 1.775-2h1.075V6H71.756v.325h1.1c1.125 0 1.825.8 1.825 2V23.85c0 1.375-1.25 1.825-1.875 1.825h-1.05V26H83.43zm10.132.55c5.4 0 7.9-4.575 7.9-8.225h-.4c0 4.175-3.1 7.85-7 7.85-3.15 0-5.025-3.1-5.025-9.525 0-6.425 1.325-10.75 4.2-10.75 4.775 0 7.175 7.6 7.175 8.925v.55h.3V5.8h-.1s-.375 1.375-1.925 1.375c-2.025 0-2.975-1.6-5.775-1.6-5.025 0-10.575 4.9-10.575 10.75 0 5.825 4.65 10.225 11.225 10.225zm30.983-.525V25.7h-.625c-1.175 0-1.525-.25-2.25-1.375l-8.1-12.45 4.35-3.775c1.95-1.7 2.75-1.775 3.65-1.775h.65V6h-8.775v.325h.825c.925 0 1.55.8 1.55 1.8 0 .7-.3 1.5-1.05 2.175l-4.85 4.4V8.325c0-1.15.825-2 1.8-2h.425V6h-10.6v.325h.65c1.15 0 1.85.8 1.85 2V23.85c0 1.375-1.275 1.825-1.9 1.825h-.6V26h10.6v-.325h-.6c-.7 0-1.625-.45-1.625-1.8V16.75l4.275 7.2c.175.3.275.575.275.8 0 .625-.6.925-1.175.925h-.425v.35h11.675zm10.64-.025v-.325h-.874c-1.4 0-2.675-1.05-2.675-3.125 0-.625.125-1.3.35-2.1l.85-2.85h5.35l2 6.35c.075.25.1.475.1.675 0 .65-.375 1.05-1.025 1.05h-1.475V26h11.45v-.325h-.975c-.675 0-1.15-.275-1.4-.975l-6.2-18.7h-4.575l-4.375 13.925c-.8 2.575-2.275 5.75-4.35 5.75h-.475V26h8.3zm2.9-8.75h-5.15l2.55-8.05 2.6 8.05zM165.62 26v-8.525h-.25c0 2.35-2.65 8.225-6.5 8.225-1.375 0-1.9-.275-1.9-1.575V7.775c0-.825.575-1.45 1.475-1.45h1.45v-.3h-11.7v.3h1c1.325 0 1.875.8 1.875 1.975v15.5c0 1.05-.55 1.9-1.825 1.9h-1v.3h17.375zm7.683 0v-.325h-.875c-1.4 0-2.675-1.05-2.675-3.125 0-.625.125-1.3.35-2.1l.85-2.85h5.35l2 6.35c.075.25.1.475.1.675 0 .65-.375 1.05-1.025 1.05h-1.475V26h11.45v-.325h-.975c-.675 0-1.15-.275-1.4-.975l-6.2-18.7h-4.575l-4.375 13.925c-.8 2.575-2.275 5.75-4.35 5.75h-.475V26h8.3zm2.9-8.75h-5.15l2.55-8.05 2.6 8.05zM193.31 26v-.325h-.7c-1.85 0-2.975-1.625-2.975-4.425.01-.098.017-2.458.02-5.086l.001-.662v-.332l.001-.666v-.984l.001-.321.001-1.792V8.925L198.786 26h4.725V10c0-2.75 1.6-3.65 2.775-3.65h.45V6h-7.25v.35h1.1c1.275 0 2.575 1.4 2.575 3.625v10.15L195.735 6h-9.05v.325h.425c.9 0 2.2.825 2.2 2.425V21.1c0 2.925-1.225 4.575-2.2 4.575h-.8V26h7zm27.565.525c4.725 0 8.075-2.975 8.075-6.675 0-9.25-11.425-4.8-11.425-10.925 0-1.875 1.2-3.025 3.05-3.025 3.725 0 6.075 4.575 6.275 7.15l.275.025V5.55l-.225-.025c0 .475-.45 1.15-1.875 1.15-1.475 0-2.45-1.1-4.95-1.1-4.3 0-7.65 3.05-7.65 6.45 0 8.1 11.7 4.7 11.7 11 0 1.975-1.6 3.175-3.525 3.175-4.6 0-7.5-6.75-7.925-8.825h-.275v8.7l.25-.025c0-.275.35-1 1.4-1 2.275 0 3.6 1.475 6.825 1.475zM244.358 26v-.325h-1.55c-.6 0-1.1-.6-1.1-1.525V6.325h.375c2.6 0 5.8 4.35 5.8 7.35v.9h.25V6h-18.85v8.575h.275v-.75c0-3.425 3.725-7.5 5.95-7.5h.3V24.2c0 .8-.45 1.475-1.05 1.475h-1.95V26h11.55zm13.482.475c4.625 0 6.95-1.725 6.95-5.125V10.925c0-3.35 1.725-4.6 3.2-4.6h.425v-.3h-8v.3h.775c1.775 0 3.25 1.625 3.25 4.675v10.25c0 2.85-1.65 4.2-4 4.2-2.675 0-4.425-.825-4.425-3.525V7.85c0-.95.775-1.525 1.85-1.525h.6v-.3H248.09v.3h.65c.925 0 1.45.525 1.45 1.45v13.75c0 2.6 3.075 4.95 7.65 4.95zM279.398 26c4.675 0 9.15-3.025 9.15-10.05 0-5.3-4.075-9.95-9.05-9.95h-11.525v.325h.725c.95 0 1.625.475 1.625 1.65V24.25c0 1-.65 1.45-1.875 1.45h-1.45v.3h12.4zm-.287-.3h-1.663c-.9 0-1.4-.6-1.4-1.5V6.325h2.575c1.925 0 3.4 1.575 3.4 9.525 0 8.79-1.018 9.82-2.912 9.85zm20.77.3v-.325h-1.225c-.725 0-1.625-.45-1.625-1.8V8.325c0-1.15.8-2 1.775-2h1.075V6h-11.675v.325h1.1c1.125 0 1.825.8 1.825 2V23.85c0 1.375-1.25 1.825-1.875 1.825h-1.05V26h11.675zm9.807.35c5.625 0 10.2-4.625 10.2-10.35s-4.575-10.375-10.2-10.375c-5.625 0-10.2 4.65-10.2 10.375s4.575 10.35 10.2 10.35zm-.05-.35c-2.625 0-3.6-2.15-3.6-10.225 0-8.1 1.075-9.775 3.65-9.775 2.325 0 3.925 1.4 3.925 9.625 0 8.25-1.375 10.375-3.975 10.375z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <p className="leading-loose">
        <Obfuscate
          className={
            "text-gray-400 hover:text-gray-100 transition-ease-out duration-300 border-b border-gray-700"
          }
          email="info@patrickalanstudio.com"
        />
        <br />
        <a
          className="hover:text-gray-100 transition-ease-out text-gray-400 duration-300"
          href="tel:1-719-271-4574"
        >
          719.271.4574
        </a>
      </p>
      <address className="mt-12 text-sm italic text-right text-gray-500">
        <p>
          56 Wareham St Suite 206
          <br />
          Boston, MA 02118
        </p>
        <p className="mt-4"></p>
      </address>
    </main>
  </div>
);

export default Home;
