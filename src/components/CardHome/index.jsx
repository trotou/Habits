import React, { useState } from "react";
import cx from "clsx";
import NoSsr from "@material-ui/core/NoSsr";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { Row, Item } from "@mui-treasury/components/flex";
import ActionsInAccordionSummary from "../AcordeonHome";
import { Avatar, CardActions, Collapse, IconButton } from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useGridStyles, useStyles, cardsWrapperStyle } from "./styles";
import { currentColor1 } from "../../styles/globalStyles";

const CustomCard = ({
  styles,
  cover,
  logo,
  title,
  brand,
  date,
  code,
  teory,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const mediaStyles = useCoverCardMediaStyles();

  return (
    <>
      <Box className={cx(styles.root, styles.color)} pt={20}>
        <CardMedia
          image={cover}
          className={styles.cover}
          classes={mediaStyles}
        />
        <Box className={styles.content} p={2}>
          <Box position={"relative"} zIndex={1}>
            <Row p={0} gap={2}>
              <Item>
                <Avatar className={styles.logo} src={logo} />
              </Item>
              <Item position={"bottom"}>
                <h2 className={styles.title}>{title}</h2>
              </Item>
            </Row>
            <Row mt={4} alignItems={"center"}>
              <Item>
                <div className={styles.team}>{brand}</div>
              </Item>
              <Item position={"right"}>
                <div className={styles.date}>{date}</div>
              </Item>
            </Row>
            <CardActions>
              <IconButton
                className={clsx(styles.expand, {
                  [styles.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Box>
        <Box className={styles.form}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ActionsInAccordionSummary code={code} />
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export const HighlightCardDemo = React.memo(function HighlightCard() {
  const styles1 = useStyles({ color: currentColor1 });
  const styles2 = useStyles({ color: currentColor1 });

  const gridStyles = useGridStyles();
  return (
    <>
      <NoSsr></NoSsr>
      <Grid
        classes={gridStyles}
        wrap={"nowrap"}
        container
        spacing={4}
        style={cardsWrapperStyle}
      >
        <Grid item>
          <CustomCard
            code=""
            styles={styles1}
            cover={"./images/code.jpg"}
            logo={"./images/logo.png"}
            title={
              <>
                <br></br>
                Trilha de Programação
              </>
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            code={null}
            styles={styles2}
            cover={
              "https://workingnation.com/wp-content/uploads/2018/04/shutterstock_459867970.jpg"
            }
            logo={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4uMMIweU1SgPJOlJwOmITkUvL8gm34_fZw&usqp=CAU"
            }
            title={
              <>
                <br></br>
                Grupos da Comunidade
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
});

export default HighlightCardDemo;
