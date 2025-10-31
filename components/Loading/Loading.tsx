import React from "react";
import "./Loading.css";

interface LoadingProps {
    message?: string;
    size?: "small" | "medium" | "large";
    type?: "spinner" | "dots" | "pulse" | "bars";
}

export const Loading: React.FC<LoadingProps> = ({
                                                    message = "Analyse des données en cours...",
                                                    size = "medium",
                                                    type = "spinner"
                                                }) => {
    return (
        <div className={`loading-container ${size}`}>
            <div className="loading-content">
                {/* Spinner classique */}
                {type === "spinner" && (
                    <div className="spinner">
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                        <div className="spinner-ring"></div>
                    </div>
                )}

                {/* Dots bouncing */}
                {type === "dots" && (
                    <div className="dots-loading">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )}

                {/* Pulse */}
                {type === "pulse" && (
                    <div className="pulse-loading">
                        <div className="pulse-circle"></div>
                    </div>
                )}

                {/* Bars */}
                {type === "bars" && (
                    <div className="bars-loading">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                )}

                <p className="loading-message">{message}</p>
            </div>
        </div>
    );
};