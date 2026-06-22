{
  href: "https://cats.example.org.au:1234/stripes/fur.html?pattern=tabby#claws",

  scheme: "https",
  protocol: "https:",

  authority: "cats.example.org.au:1234",
  userinfo: null,
  username: "",
  password: "",

  host: "cats.example.org.au:1234",
  hostname: "cats.example.org.au",
  port: "1234",

  origin: "https://cats.example.org.au:1234",

  pathname: "/stripes/fur.html",
  pathSegments: ["stripes", "fur.html"],
  filename: "fur.html",
  extension: "html",

  search: "?pattern=tabby",
  query: "pattern=tabby",
  queryParams: [
    { name: "pattern", value: "tabby" }
  ],

  hash: "#claws",
  anchor: "#claws",
  fragment: "claws",

  hostType: "domain-name",
  hostnameLabels: ["cats", "example", "org", "au"],

  tld: "au",
  publicSuffix: "org.au",
  effectiveTld: "org.au",

  registrableDomain: "example.org.au",
  registrableDomainLabel: "example",

  domain: "example.org.au",
  domainName: "example.org.au",

  subdomain: "cats",
  subdomainLabels: ["cats"],

  fullyQualifiedDomainName: "cats.example.org.au",
  fqdn: "cats.example.org.au",
  absoluteDnsName: "cats.example.org.au.",

  site: "https://example.org.au",
  schemefulSite: "https://example.org.au",
  schemelessSite: "example.org.au"
}


{
  domain: {
    value: "example.org.au",
    interpretation: "registrable domain",
    note: "Chosen convention. In this analyzer, `domain` means the registrable domain / eTLD+1."
  },

  domainName: {
    value: "example.org.au",
    interpretation: "ICANN-style domain name",
    note: "Chosen convention. This excludes subdomain labels such as `cats` or `www`."
  },

  fullyQualifiedDomainName: {
    value: "cats.example.org.au",
    interpretation: "common-display FQDN",
    note: "Commonly written without the trailing root dot. See `absoluteDnsName` for the strict DNS form."
  },

  absoluteDnsName: {
    value: "cats.example.org.au.",
    interpretation: "strict absolute DNS name",
    note: "Includes the root label marker as a trailing dot."
  }
}
