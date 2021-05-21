import React, { useContext, useState, useEffect } from "react";
import Select from "react-select";
import CatégorieCard from "./CatégorieCard.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import UserContext from "../../../Context/user/userContext";
import AuthContext from "../../../Context/auth/authContext";
import { useSnackbar } from "notistack";

function AbonnéCenterOfInterest() {
  //app level state(user context)
  const userContext = useContext(UserContext);
  const {
    catégorieOption,
    fullCatégorieData,
    addCentreOfInteret,
    deleteCentreOfInteret,
    responseMessage,
    ClearResponseMessage,
  } = userContext;
  //app level state(auth context)
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  //compoenet level state
  const [userInteret, setUserInteret] = useState();

  const [items, setitems] = useState();
  //used to filter use Centreintert array with fullCatégorieData array and store in res
  //fullCatégorieData item that match the item in user Centreintert array
  // to get full catégorie object that containt the catégorie picture
  useEffect(() => {
    if (fullCatégorieData) {
      const res = fullCatégorieData.filter((item) =>
        user.centreInteret.includes(item.typeCatégorie)
      );
      setitems(res);
    }
  }, [user.centreInteret]);
  //this method is user to delete user centre of interet
  const deleteInteret = (id, event) => {
    deleteCentreOfInteret(items[id].typeCatégorie);
  };
  //this method is user to add user centre of interet
  const addInteret = () => {
    let interet = userInteret.map((item) => item.label);
    addCentreOfInteret(interet);
  };

  //handel select change
  const handelCatégorieChange = (selectedOption) => {
    setUserInteret(selectedOption);
  };
  //used for displaying response msg
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (responseMessage !== "aucune message") {
      enqueueSnackbar(
        responseMessage,

        { variant: "success" }
      );
    }
    return () => {
      ClearResponseMessage();
    };
  }, [responseMessage]);

  return (
    <div className="abonneIntert">
      <div className="abonneIntert__top">
        <Select
          options={catégorieOption}
          isOptionDisabled={(catégorieOption) =>
            user.centreInteret.includes(catégorieOption.label)
          }
          isMulti
          onChange={handelCatégorieChange}
          className="intert-select"
        />
        <button id="addIntert-btn">
          <AddIcon onClick={addInteret} />
        </button>
      </div>
      <h2> Mes centre d'intérêt </h2>

      <div className="abonneIntert__bottom">
        <Container>
          <Row xs={3} md={3} lg={8}>
            {items &&
              items.map((item, index) => {
                return (
                  <Col xs={4} md={3} lg={2}>
                    <div className="userCatégorie">
                      <div className="userCatégorie-action">
                        <ClearIcon
                          id="userCatégorie-icon"
                          onClick={(e) => deleteInteret(index, e)}
                        />
                      </div>
                      <div className="userCatégorie-info">
                        <CatégorieCard key={index} data={item} />
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AbonnéCenterOfInterest;
