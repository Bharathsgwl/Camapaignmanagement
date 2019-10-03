import ReactTable from "react-table";
import React, { Component } from "react";
import "react-table/react-table.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { CSVLink, CSVDownload } from "react-csv";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import DialogBox from "./DialogBox";
const columns = [
  {
    Header: "Index",
    accessor: "id"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Company",
    accessor: "company"
  },
  {
    Header: "Designation",
    accessor: "designation"
  },
  {
    Header: "Email-id",
    accessor: "emailid"
  },
  {
    Header: "Phone number",
    accessor: "phonenumber"
  },
  {
    Header: "Address",
    accessor: "address"
  },
  {
    Header: "Postal-code",
    accessor: "postalcode"
  }
];

export default class ReactTableComponent extends Component {
  constructor(props) {
    super(props);
    console.log("props of the constructor", props);
    this.state = {
      content: "",
      data: [],
      isloading: true,
      end: 100,
      totalList: [],
      from: 0,
    open:true
    };
  }

  dataDisplay = async () => {
    let content = [];
    var { end, start, totalList, from } = this.state;
    console.log(end, "updated");
    console.log(typeof end, "updated");
    console.log(typeof totalList, "updated");
    console.log(window.origin);
    const url = `${window.origin}/api/search`;
    console.log(url);
    console.log(document.cookie);
    const rawResponse = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: "",
        searchWeight: 0,
        filters: [
          {
            geoFilter: {
              or: [
                {
                  exclude: false,
                  type: "stateOrProvince",
                  label: "California, United States",
                  value: "5d3ce39b-0a1c-3804-a38a-ddd8166ab9a2"
                }
              ]
            },
            employeesAllSitesRangesFacet: {
              allSites: true,
              ranges: [
                {
                  from: 1,
                  to: 20
                }
              ]
            },
            industryFilter: {
              values: [
                "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
                "072fc7ea-afac-334d-a043-5a684e476c1d",
                "47caed97-63dd-3e5e-b4ed-1d057452c851",
                "765bdfc3-86a6-3a79-8951-960ecf71fae4",
                "f5ff8175-e9ef-3789-884a-8ce0462153fa",
                "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
                "5264e5df-74b3-3d8d-8c80-f35f05d541de",
                "9a1f9cda-a022-3380-b857-95ff9d5cf47e"
              ],
              meta: {
                values: [
                  {
                    value: "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
                    label:
                      "39 - Computer and Office Machine Repair and Maintenance",
                    id: "c43681cf-b4ce-32b2-beb6-6e2e1f43703a",
                    checked: true
                  },
                  {
                    value: "072fc7ea-afac-334d-a043-5a684e476c1d",
                    label:
                      "40 - Computer and Peripheral Equipment Manufacturing",
                    id: "072fc7ea-afac-334d-a043-5a684e476c1d",
                    checked: true
                  },
                  {
                    value: "47caed97-63dd-3e5e-b4ed-1d057452c851",
                    label: "41 - Computer Programming",
                    id: "47caed97-63dd-3e5e-b4ed-1d057452c851",
                    checked: true
                  },
                  {
                    value: "765bdfc3-86a6-3a79-8951-960ecf71fae4",
                    label: "42 - Computer System Design Services",
                    id: "765bdfc3-86a6-3a79-8951-960ecf71fae4",
                    checked: true
                  },
                  {
                    value: "f5ff8175-e9ef-3789-884a-8ce0462153fa",
                    label:
                      "43 - Computer, Office Equipment and Software Merchant Wholesalers",
                    id: "f5ff8175-e9ef-3789-884a-8ce0462153fa",
                    checked: true
                  },
                  {
                    value: "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
                    label: "51 - Data Processing",
                    id: "f50f0a39-8161-38ce-a4a9-c97f9a8ce2ce",
                    checked: true
                  },
                  {
                    value: "5264e5df-74b3-3d8d-8c80-f35f05d541de",
                    label: "87 - Internet and Web Services",
                    id: "5264e5df-74b3-3d8d-8c80-f35f05d541de",
                    checked: true
                  },
                  {
                    value: "9a1f9cda-a022-3380-b857-95ff9d5cf47e",
                    label: "173 - Software",
                    id: "9a1f9cda-a022-3380-b857-95ff9d5cf47e",
                    checked: true
                  }
                ],
                source: "OS2010",
                primary: false
              }
            },
            hasEmailFacet: {
              values: ["T"],
              type: ""
            },
            emailTypeFilter: {
              values: ["Campaign Verified Email"],
              type: ""
            }
          }
        ],
        aggs: {
          contactCompanyCount: {}
        },
        from: 0,
        size: parseInt(end),
        sortBy: [
          {
            contact: [
              {
                CONTACT_LEVEL: "asc"
              }
            ]
          }
        ],
        types: ["contact"]
      })
    });
    content = await rawResponse.json();

    console.log(content);
    let data = content.searchResults.results;

    data = data.map((element, id) => {
      return {
        id,
        name:
          element.firstName + " " + element.middleName + " " + element.lastName,
        company: element.company.companyName,
        designation: element.title,
        emailid: element.email,
        phonenumber: element.company.phone,
        address:
          element.company.addresses[0].address1 +
          "," +
          element.company.addresses[0].city +
          "," +
          element.company.addresses[0].state.name +
          "," +
          element.company.addresses[0].country.name,
        postalcode: element.company.addresses[0].postalCode
      };
    });
    var totalList = content.searchResults.results;

    totalList = totalList.map((element, id) => {
      return {
        id,
        name:
          element.firstName + " " + element.middleName + " " + element.lastName,
        company: element.company.companyName,
        designation: element.title,
        emailid: element.email,
        phonenumber: element.company.phone,
        address:
          element.company.addresses[0].address1 +
          "," +
          element.company.addresses[0].city +
          "," +
          element.company.addresses[0].state.name +
          "," +
          element.company.addresses[0].country.name,
        postalcode: element.company.addresses[0].postalCode
      };
    });

    this.setState({ isloading: false, data,totalList });
  };
  componentDidMount() {
    this.dataDisplay();
  }

  // handleChange = (property, value) => {
  //   let { from } = this.state;
  //   this.setState({
  //     [property]: value
  //   });
  // };
  handleOnClick = index => {
    const { end } = this.state;
    let { totalList } = this.state;
    totalList = parseInt(end);
    this.dataDisplay();
    this.setState({
      ...this.state,
      totalList,
      end: 0
    });
    console.log(this.state.data);
  };
  toggleDiolog = () => {
    debugger
    var { open } = this.state;
    debugger
        open=!open
    this.setState({  open: !open  });
    debugger
  };
  handleOnDisplay = () => {
    var { open } = this.state;
    debugger;
    open=!open
    this.setState({
        open:!open
    });
    debugger
  };

  render() {
    var { data, end, totalList, from, open } = this.state;

    const { handleChange, toggleDiolog, handleOnDisplay } = this;
    console.log(data,"data");
    console.log(totalList,"totalList");
    console.log(typeof end);
    console.log(typeof totalList);
    console.log(open);

    return (
      <div className="container-fluid">
        <div className="row" style={{ float: "right" }}>
          <Button variant="contained" color="primary" onClick={handleOnDisplay}>
            Download
          </Button>
          <CSVLink data={data} variant="contained">Download as CSV</CSVLink>
          <DialogBox
            open={open}
            toggleDiolog={toggleDiolog}
          />
        </div>
        <br />
        <div className="row">
          Enter the record size:
          <br />
          <br />
          <input
            type="number"
            value={end}
            onChange={e => {
              handleChange("end", e.target.value);
            }}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleOnClick}
          >
            Submit
          </Button>
        </div>
        <div className="row">
          <div className="col-md-12">
            {!this.state.isloading ? (
              <div>
                <ReactTable
                  minRows={1}
                  data={data}
                  columns={columns}
                  defaultPageSize={10}
                  showPagination={true}
                  showPaginationBottom={true}
                />
              </div>
            ) : (
              <div>
                <Loader type="Plane" color="#00BFFF" height={100} width={100} />
              </div>
            )}
          </div>
        </div>
        <br />
      </div>
    );
  }
}
// <CSVLink data={data} variant="contained">Download as CSV</CSVLink>
