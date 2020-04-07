import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import SocialMediaLink from "../components/SocialMediaLink";
import Icon from "@mdi/react";
import { mdiTwitter, mdiFacebook, mdiInstagram } from "@mdi/js";
import "../components/SocialMedia.css";

export default {
  title: "SocialMediaLink",
  component: SocialMediaLink
};

const newLocal = "";
export const InitialState = () => (
  <a href="https://www.facebook.com">
    <Icon path={mdiFacebook} />
  </a>
);
