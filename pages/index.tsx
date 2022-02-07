import * as React from "react";
import {
  Button,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Modal,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { challenges } from "../src/challenges";
import Router from "next/router";
import Layout from "../components/common/Layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import useClasses from "../src/useClasses";
import useStyles from "../styles/style";

const DemoButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: "#00AD7C",
  "&:hover": {
    backgroundColor: "#00AD7C",
  },
}));

const LandingPage = () => {
  const classes = useClasses(useStyles);
  const [openModal, setOpenModal] = React.useState(false);
  const [previewImage, setPreviewImage] = React.useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Layout>
        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewImage}
              alt="Main Image"
              width="100%"
              height="100%"
            />
          </Box>
        </Modal>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell align="center">Preview</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Source Code</TableCell>
                <TableCell align="center">Live Site</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {challenges.map((challenge_detail) => {
                return (
                  <TableRow
                    key={challenge_detail.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={challenge_detail.image}
                        alt="Main Image"
                        onClick={() => {
                          setPreviewImage(challenge_detail.preview);
                          setOpenModal(true);
                        }}
                        className={classes.thumbnail}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {challenge_detail.name}
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        className={`${classes.categoryBox} ${
                          challenge_detail.category === "NEWBIE"
                            ? classes.newbieBox
                            : challenge_detail.category === "JUNIOR"
                            ? classes.juniorBox
                            : challenge_detail.category === "INTERMEDIATE"
                            ? classes.intermediateBox
                            : challenge_detail.category === "ADVANCED"
                            ? classes.advancedBox
                            : classes.guruBox
                        }`}
                      >
                        <Typography
                          className={classes.categoryText}
                          variant="subtitle2"
                          component="p"
                        >
                          {challenge_detail.category}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        size="small"
                      >
                        <a
                          href={challenge_detail.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          VISIT
                        </a>
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <DemoButton
                        variant="contained"
                        startIcon={<LanguageIcon />}
                        size="small"
                        onClick={() => Router.push(challenge_detail.route)}
                      >
                        VISIT
                      </DemoButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Layout>
    </div>
  );
};

export default LandingPage;
