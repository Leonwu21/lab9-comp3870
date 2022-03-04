import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <>
<footer class="border-top footer text-muted">
<div class="container">
    &copy; 2022 - lab9-LeonWu A01166396 - <a asp-area="" href="/privacy">Privacy</a>
</div>
</footer>
    </>
  );
};
export default Footer;


{/* <script src="~/lib/jquery/dist/jquery.min.js"></script>
<script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="~/js/site.js" asp-append-version="true"></script> */}