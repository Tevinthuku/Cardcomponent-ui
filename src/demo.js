import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";

import { Motion, spring } from "react-motion";

// sandbox
import Componentsandbox from "./componentsandbox";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

class SimpleMediaCard extends React.Component {
  state = {
    opendesc: false,
    opensandbox: false
  };

  handleOpenDescription = event => {
    this.setState({
      opendesc: !this.state.opendesc
    });
  };

  handleToggleSandbox = () => {
    this.setState({
      opensandbox: !this.state.opensandbox
    });
  };
  render() {
    const { classes } = this.props;
    const { opendesc, opensandbox } = this.state;

    return (
      <div>
        <Motion
          defaultStyle={{ x: 56.25 }}
          style={{ x: spring(opendesc ? 0 : 56.25) }}
        >
          {val => (
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/620335/pexels-photo-620335.jpeg?auto=compress&cs=tinysrgb&h=350"
                title="Contemplative Reptile"
                style={{
                  paddingTop: `${val.x}%`
                }}
              />
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <Tooltip title="More Info">
                    <IconButton onClick={this.handleOpenDescription}>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />

              {val.x < 5 && (
                <div>
                  <CardContent>
                    <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Select
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={this.handleToggleSandbox}
                    >
                      Demo
                    </Button>
                  </CardActions>
                </div>
              )}
            </Card>
          )}
        </Motion>
        <Componentsandbox
          open={opensandbox}
          title="Component"
          handleToggleSandbox={this.handleToggleSandbox}
        />
      </div>
    );
  }
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
