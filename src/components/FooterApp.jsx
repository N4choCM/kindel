import React from "react";
import "../css/footer.css";

const FooterApp = ({ darkMode }) => {
	return (
		<>
        <div className={`${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
			<hr />
			<footer className={`p-2`}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg text-center my-auto">
							<p className="finger">Política de privacidad</p>
						</div>
						<div className="col-12 col-md-4 col-lg text-center my-auto">
							<p className="finger">Política de cookies</p>
						</div>
						<div className="col-12 col-md-4 col-lg text-center my-auto">
							<p className="finger">Aviso legal</p>
						</div>
						<div className="col-12 col-lg text-center mb-2">
							<i
								className="fa fa-facebook-square fa-3x me-3 finger"
								aria-hidden="true"
							></i>
							<i
								className="fa fa-instagram fa-3x me-3 finger"
								aria-hidden="true"
							></i>
							<i
								className="fa fa-twitter-square fa-3x finger"
								aria-hidden="true"
							></i>
						</div>
					</div>
				</div>
			</footer>
        </div>
		</>
	);
};

export default FooterApp;
