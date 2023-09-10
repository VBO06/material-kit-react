// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoDoctolib from "assets/images/icone-doctolib.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "NATUREA ESTHETIQUE",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com/medazuresthetique?igshid=MzRlODBiNWFlZA==",
    },
    {
      icon: (
        <img src={LogoDoctolib} alt="Doctolib Icon" style={{ width: "20px", height: "20px" }} />
      ),
      link: "https://www.doctolib.fr/medecin-generaliste/vence/asmao-salambere",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  address: (
    <MKTypography variant="button" fontWeight="regular">
      <b>Adresse : 650 avenue du Général de Gaulle 06700 Saint Laurent du Var</b>
    </MKTypography>
  ),
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        NATUREA ESTHETIQUE
      </MKTypography>
      .
    </MKTypography>
  ),
};
