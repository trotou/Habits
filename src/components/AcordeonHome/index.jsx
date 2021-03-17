import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import FullScreenDialog from "./dialog";
import { useGroup } from "../../Providers/Group";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useHistory } from "react-router-dom";

const ActionsInAccordionSummary = ({ code }) => {
  const { goals } = useGroup();
  const history = useHistory();

  return (
    <div>
      {code !== null ? (
        goals.map((goal) => (
          <Accordion>
            <AccordionSummary              
              aria-label="Expand"
              aria-controls="additional-actions1-content"
            >
              <FormControlLabel
                aria-label="Acknowledge"
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <IconButton>
                    <FullScreenDialog title={goal.title} />
                  </IconButton>
                }
                label={goal.title}
              />
            </AccordionSummary>
          </Accordion>
        ))
      ) : (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                <IconButton onClick={() => history.push("/personal")}>
                  <DirectionsIcon />
                </IconButton>
              }
              label="Vá para a página de comunidades"
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="textSecondary">
              Metas e atividades editáveis
            </Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default ActionsInAccordionSummary;
