import { Box, Typography } from "@mui/material";
import Head from "next/head";
import ExpenseChart from "../components/expense-chart-component/ExpenseChart";
import useClasses from "../src/useClasses";
import useStyles from "../styles/expenses-chart-component";

const ExpensesChartComponent = () => {
  const classes = useClasses(useStyles);

  return (
    <div role="main">
      <Head>
        <title>Expenses Chart</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box className={classes.pageWrapper}>
        <Box className={classes.headerWrapper}>
          <Box>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.myBalanceText}
            >
              My balance
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              className={classes.balanceAmount}
            >
              $ 921.48
            </Typography>
          </Box>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/expenses-chart-component/logo.svg" alt="logo" />
        </Box>
        <Box className={classes.chartWrapper}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.chartHeading}
          >
            Spending - Last 7 days
          </Typography>
          <ExpenseChart />
          <hr className={classes.divider} />
          <Box className={classes.monthStatsWrapper}>
            <Box>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitleText}
              >
                Total this month
              </Typography>
              <Typography
                component="h1"
                variant="h1"
                className={classes.thisMonthAmount}
              >
                $478.33
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.lastMonthPercentage}
              >
                +2.4%
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className={classes.subtitleText}
              >
                from last month
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ExpensesChartComponent;
