import React from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddCategoryPopUP from "./AddCategoryPopUP";
import DetailCatégoriePopUp from "./DetailCatégoriePopUp";
import swal from "sweetalert";
import { getDate } from "../../../utilis/date";
class CategoryManagment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: null,
      detailReqModalShow: false,
      AddCatégorieModalShow: false,
      detailCatégorieModalShow: false,
      categories: [],
    };
  }
  //this method is used to store in categorie State which object is
  //selected in table to passe it like a props to the modal
  selectedItem = (index) => {
    this.setState({ categorie: this.state.categories[index] });
  };
  //run when compoenet is mounted to get all categorie stored in db and set the state(categories)
  //with response data
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/Categorie/Admin/categorie")
      .then((response) => {
        this.setState({ categories: response.data });
      });
  }
  //this method run when user click in action icon that delete catégorie
  deletItem = (data) => {
    swal({
      title: "Voulez vous supprimer cette catégorie",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          axios
            .delete(
              `http://localhost:8000/api/Categorie/Admin/deleteCategorie/${data._id}`
            )
            .then((response) => {
              this.setState({ categories: response.data.catégories });
            }),
          swal({ icon: "success", title: "CATÉGORIÉ SUPPRIME AVEC SUCCES !" })
        );
      } else {
        swal("Opération annuler! ");
      }
    });
  };

  render() {
    return (
      <div className="categoryManagment">
        <div className="dataTable">
          <div className="dataTable__top">
            <div className="container px-0">
              <div className="row">
                <div className="col-12 ">
                  <div className="data-card ">
                    <div className="card-body px-1  ">
                      <h5 className="card-title data-cardTitle">
                        Nombre catégorie
                      </h5>
                      <p className="card-text">
                        {this.state.categories.length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 ">
                  <AddCategoryPopUP
                    show={this.state.detailCatégorieModalShow}
                    onHide={() =>
                      this.setState({ detailCatégorieModalShow: false })
                    }
                  />
                  <button
                    className=" addButton"
                    onClick={() =>
                      this.setState({ detailCatégorieModalShow: true })
                    }
                  >
                    Ajouter catégorie
                  </button>
                </div>
              </div>
            </div>
            <form id="form-1">
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
                    <th scope="col"> Nom Catégorie</th>
                    <th scope="col"> Date d'enregistrement </th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.categories.map((data, index) => {
                    return (
                      <tr>
                        <td scope="row">{data._id}</td>
                        <td>{data.typeCatégorie}</td>
                        <td>{getDate(data.addDate)}</td>

                        <td id="icone-action">
                          <div onClick={() => this.selectedItem(index)}>
                            <VisibilityIcon
                              onClick={() =>
                                this.setState({ detailReqModalShow: true })
                              }
                              id="dataTable-viewIcon"
                            />
                          </div>
                          <div id="ff">
                            <DeleteIcon
                              onClick={() => this.deletItem(data)}
                              id="dataTable-delteIcon"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <DetailCatégoriePopUp
              categorie={
                this.state.categorie
                  ? this.state.categorie
                  : this.state.categories
              }
              show={this.state.detailReqModalShow}
              onHide={() => this.setState({ detailReqModalShow: false })}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CategoryManagment;
