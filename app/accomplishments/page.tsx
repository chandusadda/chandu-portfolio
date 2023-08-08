"use client"

import { Container, Grid, Typography, Paper, ClassNameMap } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Content from '@/Lib/Content';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Styles for Accomplishments page
const styles = makeStyles(({ breakpoints }: any) => {
    return {
        root: {
            height: "100%",
            minHeight: "80vh",
            padding: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10vh",
            [breakpoints.down("sm")]: {
                marginTop: "1vh",
                minHeight: "90vh",
            },
        },
        title: {
            fontWeight: "bolder !important",
            marginTop: "10px !important",
            marginBottom: "20px !important",
            [breakpoints.down("sm")]: {
                fontSize: "1.8rem !important",
                marginTop: "10vh !important",
            },
        },
    };
});

function Accomplishments() {
    const classes: ClassNameMap = styles();
    return (
        <>
            {/* Accomplishments Page */}
            <Container maxWidth="lg">
                <Grid
                    container
                    className={classes.root}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant="h3" className={classes.title}>
                            Accomplishments
                        </Typography>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Award
                                            </TableCell>
                                            <TableCell>
                                                Description
                                            </TableCell>
                                            <TableCell>
                                                By
                                            </TableCell>
                                            <TableCell>
                                                When
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Content.accomplishments.map((row, index) => (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                <TableCell>
                                                    {row.award}
                                                </TableCell>
                                                <TableCell>
                                                    {row.description}
                                                </TableCell>
                                                <TableCell>
                                                    {row.by}
                                                </TableCell>
                                                <TableCell>
                                                    {row.when}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Accomplishments;