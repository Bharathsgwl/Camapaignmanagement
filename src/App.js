import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactTableComponent from "./components/ReactTableComponent";
import MaterialTable from "./components/MaterialTable"

// let content;
class App extends React.Component {
  // state = {
  //   content: ''
  // }
  // componentWillMount = async () => {
  //   console.log(window.origin);
  //   const url=`${window.origin}/api/search`;

  //   console.log(url);
  //   console.log(document.cookie)
  //   const rawResponse = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       query: "",
  //       searchWeight: 0,
  //       filters: [
  //         {
  //           geoFilter: {
  //             or: [
  //               {
  //                 exclude: false,
  //                 type: "stateOrProvince",
  //                 label: "California, United States",
  //                 value: "5d3ce39b-0a1c-3804-a38a-ddd8166ab9a2"
  //               }
  //             ]
  //           },
  //           employeesAllSitesRangesFacet: {
  //             allSites: true,
  //             ranges: [
  //               {
  //                 from: 1,
  //                 to: 20
  //               }
  //             ]
  //           },
  //           industryFilter: {
  //             values: [
  //               "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
  //               "072fc7ea-afac-334d-a043-5a684e476c1d",
  //               "47caed97-63dd-3e5e-b4ed-1d057452c851",
  //               "765bdfc3-86a6-3a79-8951-960ecf71fae4",
  //               "f5ff8175-e9ef-3789-884a-8ce0462153fa",
  //               "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
  //               "5264e5df-74b3-3d8d-8c80-f35f05d541de",
  //               "9a1f9cda-a022-3380-b857-95ff9d5cf47e"
  //             ],
  //             meta: {
  //               values: [
  //                 {
  //                   value: "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
  //                   label:
  //                     "39 - Computer and Office Machine Repair and Maintenance",
  //                   id: "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "072fc7ea-afac-334d-a043-5a684e476c1d",
  //                   label:
  //                     "40 - Computer and Peripheral Equipment Manufacturing",
  //                   id: "072fc7ea-afac-334d-a043-5a684e476c1d",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "47caed97-63dd-3e5e-b4ed-1d057452c851",
  //                   label: "41 - Computer Programming",
  //                   id: "47caed97-63dd-3e5e-b4ed-1d057452c851",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "765bdfc3-86a6-3a79-8951-960ecf71fae4",
  //                   label: "42 - Computer System Design Services",
  //                   id: "765bdfc3-86a6-3a79-8951-960ecf71fae4",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "f5ff8175-e9ef-3789-884a-8ce0462153fa",
  //                   label:
  //                     "43 - Computer, Office Equipment and Software Merchant Wholesalers",
  //                   id: "f5ff8175-e9ef-3789-884a-8ce0462153fa",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
  //                   label: "51 - Data Processing",
  //                   id: "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "5264e5df-74b3-3d8d-8c80-f35f05d541de",
  //                   label: "87 - Internet and Web Services",
  //                   id: "5264e5df-74b3-3d8d-8c80-f35f05d541de",
  //                   checked: true
  //                 },
  //                 {
  //                   value: "9a1f9cda-a022-3380-b857-95ff9d5cf47e",
  //                   label: "173 - Software",
  //                   id: "9a1f9cda-a022-3380-b857-95ff9d5cf47e",
  //                   checked: true
  //                 }
  //               ],
  //               source: "OS2010",
  //               primary: false
  //             }
  //           },
  //           hasEmailFacet: {
  //             values: ["T"],
  //             type: ""
  //           },
  //           emailTypeFilter: {
  //             values: ["Campaign Verified Email"],
  //             type: ""
  //           }
  //         }
  //       ],
  //       aggs: {
  //         contactCompanyCount: {}
  //       },
  //       from: 0,
  //       size: 1000,
  //       sortBy: [
  //         {
  //           contact: [
  //             {
  //               CONTACT_LEVEL: "asc"
  //             }
  //           ]
  //         }
  //       ],
  //       types: ["contact"]
  //     })
  //   });
  //   this.state.content = await rawResponse.json();
  //   console.log(this.state.content);
  // };
  render() {
    return (
      <div className="App">
        {<ReactTableComponent /> }
      </div>
    );
  }
}

export default App;
// <MaterialTable />
