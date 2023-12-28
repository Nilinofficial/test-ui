import { HomeIcon, ChartBarSquareIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/solid";
import { DashboardLink, dashboardDataType, reportDataType } from "@/types";






// dashboard data
export const dashboardData: dashboardDataType[] = [
  {
    key: 1,
    projectName: "andreionciu juice-shop",
    fixableIssues: [
      {
        value: 32,
        situation: "C",
      },
      {
        value: 35,
        situation: "H",
      },
      {
        value: 45,
        situation: "M",
      },
      {
        value: 45,
        situation: "L",
      },
    ],
    actions: "View PR #11",
  },
  {
    key: 2,
    projectName: "snyk githubn-apps",
    fixableIssues: [
      {
        value: 0,
        situation: "C",
      },
      {
        value: 35,
        situation: "H",
      },
      {
        value: 45,
        situation: "M",
      },
      {
        value: 0,
        situation: "L",
      },
    ],
    actions: "View PR #75",
  },
];

// Sidebar links

export const dashBoardLinks: DashboardLink[] = [
  {
    id: 0,
    name: "Dashboard",
    icon: <HomeIcon className={`w-6 h-6`} />,
    route: "/dashboard",
  },
  {
    id: 1,
    name: "Projects",
    icon: <DocumentTextIcon className={`w-6 h-6`} />,
    route: "/projects",
  },
  {
    id: 2,
    name: "Reports",
    icon: <ChartBarSquareIcon className={`w-6 h-6`} />,
    route: "/reports",
  },
  {
    id: 5,
    name: "Members",
    icon: <UsersIcon className={`w-6 h-6`} />,
    route: "/members",
  },
  {
    id: 6,
    name: "Settings",
    icon: <CogIcon className={`w-6 h-6`} />,
    route: "/settings",
  },
];




export const reportData: reportDataType[] = [
  {
    key: "1",
    score: 98,
    issueType: "H",
    issue: "ashbhbsahbs hsdchsdc hbbhhcsd",
    cve: "",
    cwe: "bbh-79",
    project: "bbshbhsb/sdhsbhdch nscjsc",
    exploitMaturity: "",
    autoFixable: "",
    introduced: "May 24,2023",
    matterbayProduct: "Snyk code",
  },
  {
    key: "2",
    score: 98,
    issueType: "H",
    issue: "ashbhbsahbs hsdchsdc hbbhhcsd",
    cve: "",
    cwe: "bbh-79",
    project: "bbshbhsb/sdhsbhdch nscjsc",
    exploitMaturity: "",
    autoFixable: "",
    introduced: "May 24,2023",
    matterbayProduct: "Snyk code",
  },
];




export const  allowedCountries = [
  "US",
  "AE",
  "AG",
  "AL",
  "AM",
  "AR",
  "AT",
  "AU",
  "BA",
  "BE",
  "BG",
  "BH",
  "BO",
  "BS",
  "CA",
  "CH",
  "CI",
  "CL",
  "CO",
  "CR",
  "CY",
  "CZ",
  "DE",
  "DK",
  "DO",
  "EC",
  "EE",
  "EG",
  "ES",
  "ET",
  "FI",
  "FR",
  "GB",
  "GH",
  "GM",
  "GR",
  "GT",
  "GY",
  "HK",
  "HR",
  "HU",
  "ID",
  "IE",
  "IL",
  "IS",
  "IT",
  "JM",
  "JO",
  "JP",
  "KE",
  "KH",
  "KR",
  "KW",
  "LC",
  "LI",
  "LK",
  "LT",
  "LU",
  "LV",
  "MA",
  "MD",
  "MG",
  "MK",
  "MN",
  "MO",
  "MT",
  "MU",
  "MX",
  "MY",
  "NA",
  "NG",
  "NL",
  "NO",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PH",
  "PL",
  "PT",
  "PY",
  "QA",
  "RO",
  "RS",
  "RW",
  "SA",
  "SE",
  "SG",
  "SI",
  "SK",
  "SN",
  "SV",
  "TH",
  "TN",
  "TR",
  "TT",
  "TW",
  "TZ",
  "UY",
  "UZ",
  "VN",
  "ZA",
  "IN",
  "BD",
  "BJ",
  "MC",
  "NE",
  "SM",
  "AZ",
  "BN",
  "BT",
  "AO",
  "DZ",
  "BW",
  "GA",
  "LA",
  "MZ",
  "KZ",
  "PK",
];



// dashboard data
export const specs: any = [
  {
    key: 1,
    projectName: "andreionciu juice-shop",
    fixableIssues: [
      {
        value: 32,
        situation: "C",
      },
      {
        value: 35,
        situation: "H",
      },
      {
        value: 45,
        situation: "M",
      },
      {
        value: 45,
        situation: "L",
      },
    ],
    actions: "View PR #11",
  },
  {
    key: 2,
    projectName: "snyk githubn-apps",
    fixableIssues: [
      {
        value: 0,
        situation: "C",
      },
      {
        value: 35,
        situation: "H",
      },
      {
        value: 45,
        situation: "M",
      },
      {
        value: 0,
        situation: "L",
      },
    ],
    actions: "View PR #75",
  },
];