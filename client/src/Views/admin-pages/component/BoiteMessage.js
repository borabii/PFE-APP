import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import DetailBoiteMessagePopUp from "./DetailBoiteMessagePopUp";
import axios from "axios";
import { getDate } from "../../../utilis/date";
class BoiteMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      detailReqModalShow: false,
      messages: [],
      data: [],
    };
  }

  updateItem = (index) => {
    const item = this.state.messages[index];
    this.setState({ message: item });
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Contact/Admin/getContact")
      .then((response) => {
        this.setState({ messages: response.data });
      });
  }
  //searsh methode
  handelSearshChange = (e) => {
    if (e.target.value !== "") {
      this.setState({
        data: this.state.messages.filter((message) =>
          message.email.toUpperCase().includes(e.target.value.toUpperCase())
        ),
      });
    } else this.setState({ data: [] });
  };
  render() {
    return (
      <div className="boiteMessage">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-4  ">
                <h5 className="card-title data-cardTitle"> Nombre Message</h5>
                <p className="card-text">{this.state.messages.length}</p>
              </div>
            </div>

            <form>
              <input
                className="form-control mr-sm-2 "
                type="search"
                placeholder="Chercher par email "
                onChange={this.handelSearshChange}
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
                  {this.state.data.length > 0
                    ? this.state.data.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.nom}</td>
                            <td>{data.email}</td>
                            <td>{getDate(data.DateEnvoie)} </td>
                            <td onClick={() => this.updateItem(index)}>
                              <DetailBoiteMessagePopUp
                                message={
                                  this.state.message
                                    ? this.state.message
                                    : this.state.messages
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
                                id="dataTable-viewIcon"
                              />
                            </td>
                          </tr>
                        );
                      })
                    : this.state.messages.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{data._id}</td>
                            <td>{data.nom}</td>
                            <td>{data.email}</td>
                            <td>{getDate(data.DateEnvoie)} </td>
                            <td onClick={() => this.updateItem(index)}>
                              <DetailBoiteMessagePopUp
                                message={
                                  this.state.message
                                    ? this.state.message
                                    : this.state.messages
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
                                id="dataTable-viewIcon"
                              />
                            </td>
                          </tr>
                        );
                      })}
                  {/* {this.state.messages.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data._id}</td>
                        <td>{data.nom}</td>
                        <td>{data.email}</td>
                        <td>{getDate(data.DateEnvoie)} </td>
                        <td onClick={() => this.updateItem(index)}>
                          <DetailBoiteMessagePopUp
                            message={
                              this.state.message
                                ? this.state.message
                                : this.state.messages
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
                            id="dataTable-viewIcon"
                          />
                        </td>
                      </tr>
                    );
                  })} */}
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
