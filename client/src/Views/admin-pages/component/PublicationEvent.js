import React from "react";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DetailEventPopUp from "./DetailEventPopUp";

class PublicationEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      detailReqModalShow: false,
      items: [],
    };
  }

  updateItem = (index) => {
    const user = this.state.items[index];
    this.setState({ id: user });
  };
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Publication/Admin/getEvents")
      .then((response) => {
        this.setState({ items: response.data });
      });
  }
  //delete
  deletItem = (data) => {
    if (window.confirm("are you sure !")) {
      axios
        .delete(`http://localhost:8000/api/Publication/deletepub/${data._id}`)
        .then(
          this.setState({
            items: this.state.items.filter((item) => item._id !== data._id),
          })
        );
    }
  };

  render() {
    return (
      <div className="publicationEvent">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className=" data-card ">
              <div className="card-body px-2  ">
                <h5 className="card-title data-cardTitle"> Nombre évenement</h5>
                <p className="card-text">{this.state.items.length}</p>
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
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table  table-hover table-striped   text-center my-table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">adresse</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{data._id}</th>
                        <td>{data.categorie}</td>
                        <td>{data.adresse}</td>
                        <td>{data.date_Pub} </td>
                        <td
                          onClick={() => this.updateItem(index)}
                          id="icone-action"
                        >
                          <div>
                            <DetailEventPopUp
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
                          </div>
                          <div id="ff">
                            <DeleteIcon onClick={() => this.deletItem(data)} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PublicationEvent;
