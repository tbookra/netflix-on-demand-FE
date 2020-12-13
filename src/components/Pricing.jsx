import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/StarBorder";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(6, 0, 4),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: "Buy Movie",
    price: "10",
    description: [
      "One time payment",
      "Life time access",
      "Watch any where any time",
    ],
    buttonText: "Buy now",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "20",
    description: ["Mountly payment", "Access to all movies", "up to 2 devices"],
    buttonText: "Get Membership",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "60",
    description: ["Yearly payment", "Access to all movies", "Up to 5 devices"],
    buttonText: "Get Membership",
    buttonVariant: "outlined",
  },
];

const Pricing = ({ addMovie, buyMembership }) => {
  const { currentMovie } = useSelector((state) => state.mainApp);
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Want to buy -{currentMovie.original_title}-?
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Select one of the options below, either buy the movie itself(one time
          payment) or buy membership for access all the movies
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      {tier.title === "Buy Movie"
                        ? null
                        : tier.title === "Pro"
                        ? "/mo"
                        : "/yr"}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    onClick={() => {
                      if (tier.title === "Buy Movie")
                        addMovie(currentMovie.id, currentMovie.poster_path);
                      else buyMembership();
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Pricing;
