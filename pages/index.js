import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Calcular from "../components/Calcular";
import DeleteIcon from "@material-ui/icons/Delete";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Limpar from "../components/Limpar";
//className={styles.container}

export default function Home() {
    return (
        <>
            <Head>
                <title>Calculadora Dividendos FII's</title>
                <link rel="icon" href="/android-b.png" />
                <script data-ad-client="ca-pub-7997470651989645" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>

            <Container maxWidth="lg" className={styles.container}>
                <Paper elevation={3} style={{ textAlign: "center" }}>
                    <div className={styles.titulo}>
                        <h2>Calculadora de Dividendos FII's</h2>
                        <IconButton style={{ paddingTop: "19px" }}>
                            <DehazeIcon
                                style={{ color: "black", fontSize: 35 }}
                            />
                        </IconButton>
                    </div>
                </Paper>
                <div style={{ height: "20px" }}></div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{}}>
                            <div className={styles.block}>
                                <h3>Cotas Iniciais:</h3>
                                <TextField
                                    type="number"
                                    id="cotas iniciais"
                                    label="Quantidade de cotas"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Cotas Mensais:</h3>
                                <TextField
                                    type="number"
                                    id="cotas mensais"
                                    label="Quantidade de cotas"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Preço:</h3>
                                <TextField
                                    type="number"
                                    id="preco"
                                    label="Valor em R$"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Dividendo:</h3>
                                <TextField
                                    type="number"
                                    id="dividendo"
                                    label="Valor em R$"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Meses:</h3>
                                <TextField
                                    type="number"
                                    id="meses"
                                    label="Quantidade de meses"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div style={{ height: "20px" }}></div>
                            <Button
                                startIcon={<DeleteIcon />}
                                id="deletar"
                                variant="contained"
                                color="secondary"
                                onClick={() => Limpar()}
                                style={{ width: "50%" }}
                            >
                                LIMPAR
                            </Button>
                            <Button
                                startIcon={<MonetizationOnIcon />}
                                id="calcular"
                                variant="contained"
                                color="primary"
                                onClick={() => Calcular()}
                                style={{ width: "50%" }}
                            >
                                CALCULAR
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} style={{}}>
                            <div className={styles.block}>
                                <h3>Cotas Finais:</h3>
                                <TextField
                                    id="cotas finais"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Valor Final:</h3>
                                <TextField
                                    id="valor final"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                            <div className={styles.block}>
                                <h3>Mensalidade Final:</h3>
                                <TextField
                                    id="mensalidade f"
                                    variant="outlined"
                                    size="small"
                                    aling="center"
                                    style={{ width: "100%" }}
                                    className={styles.blocka}
                                />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
