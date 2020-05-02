import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import loop from "assets/gifs/logos.gif";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles()
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
            
            <img src={loop} alt="..." className={imageClasses} />
            
          </GridItem>
        </GridContainer>
      </div>
  );
}
