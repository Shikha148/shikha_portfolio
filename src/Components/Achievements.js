import azureFun from "./images/azure_fund.png";
import aifund from "./images/ai_fund.svg";
import ubs_cert from "./images/ubs_certified.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: azureFun,
            cardTitle: "AZ 900: Microsoft Azure Fundamentals",
            cardText: "Issued on: <br/> May 19, 2023",
            btnText: "See Credential",
            btnUrl: "https://learn.microsoft.com/api/credentials/share/en-us/ShikhaPandey-8353/FE649D63577B6A49?sharingId=D9447B7A5CC9F817",
        },
        {
            img: aifund,
            cardTitle: "AI 900:Microsoft Azure AI Fundamentals",
            cardText: "Issued on: <br/> March 29, 2025",
            btnText: "See Credential",
            btnUrl: "https://learn.microsoft.com/en-us/users/shikhapandey-8353/credentials/29aa60b7eb92954b",
        },
        {
            img: ubs_cert,
            cardTitle: "UBS Certified Engineer",
            cardText: "Issued on: <br/> October 11, 2024",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/6a2d373d-bf71-4af1-a3ab-ecc2670dcb72/linked_in_profile",
        }
    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-4 d-flex justify-content-center"
                            key={i}
                        >
                            
                            <Card
                                style={{
                                    width: "16rem",
                                    background: "#343a40",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br></br>
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
