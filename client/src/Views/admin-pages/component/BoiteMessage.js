import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import DetailBoiteMessagePopUp from "./DetailBoiteMessagePopUp";
import axios from "axios";

class BoiteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      detailReqModalShow: false,
      items: [
        {
          typePub: "Activity",
          _id: "6089f86bfcf1b64cd0974cfd",
          description: "tezedzed",
          adresse: "aaaaa",
          nbr_place: 2,
          user: "607e141dc0fb704f84df1b46",
          date_Pub: "2021-04-29T00:06:03.199Z",
          __v: 0,
        },
      ],
    };
  }

  updateItem = (index) => {
    const user = this.state.items[index];
    console.log(user);
    this.setState({ id: user });
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Publication/Admin/getActivity")
      .then((response) => {
        this.setState({ items: response.data.activity });
      });
  }

  render() {
    return (
      <div className="boiteMessage">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-4  ">
                <h5 className="card-title data-cardTitle"> Nombre Activité</h5>
                <p className="card-text">1000</p>
              </div>
            </div>

            <form>
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Search"
              />
              <div className="icon">
                <SearchIcon />
              </div>
            </form>
          </div>
          {/* data table */}
          <div className="dataTable__bottom">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table  table-hover table-striped   text-center my-table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>{" "}
                <tbody>
                  {this.state.items.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">1</th>
                        <td>{data.typePub}</td>
                        <td>{data._id}</td>
                        <td>{data.firstName} </td>
                        <td onClick={() => this.updateItem(index)}>
                          <DetailBoiteMessagePopUp
                            user={
                              this.state.id ? this.state.id : this.state.items
                            }
                            show={this.state.detailReqModalShow}
                            onHide={() =>
                              this.setState({ detailReqModalShow: false })
                            }
                          />
                          <VisibilityIcon
                            onClick={() =>
                              this.setState({ detailReqModalShow: true })
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default BoiteMessage;
