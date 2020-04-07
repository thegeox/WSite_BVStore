import * as React from "react";
import Icon from "@mdi/react";
import { mdiTwitter, mdiFacebook, mdiInstagram } from "@mdi/js";
import "./css/socialMediaLink.css";

export enum SocialMediaPlatform {
  FB,
  TWTR,
  NSTGRM,
}

interface ISocialMediaLinkProps {
  pageNameOnPlatform: string;
  openInNewTab?: boolean;
  socialPlatform: SocialMediaPlatform;
}

export const SocialMediaLink: React.FunctionComponent<ISocialMediaLinkProps> = (
  props
) => {
  const { socialPlatform, pageNameOnPlatform, openInNewTab = true } = props;

  let imagePath: any;
  const baseUrl: string = "https://www.";
  let platformUrl: string;
  let cssClass: string;

  switch (socialPlatform) {
    case SocialMediaPlatform.FB:
      imagePath = mdiFacebook;
      platformUrl = "facebook.com/";
      cssClass = "fb";
      break;
    case SocialMediaPlatform.TWTR:
      imagePath = mdiTwitter;
      platformUrl = "twitter.com/";
      cssClass = "twttr";
      break;
    case SocialMediaPlatform.NSTGRM:
      imagePath = mdiInstagram;
      platformUrl = "instagram.com/";
      cssClass = "nstgrm";
      break;
  }

  const url: string = baseUrl + platformUrl + pageNameOnPlatform;
  return (
    <div className="cSocialMediaLink_Wrapper">
      <a href={url} target={openInNewTab ? "_blank" : ""}>
        <Icon path={imagePath} className={cssClass}></Icon>
      </a>

      <svg width="0" height="0">
        <radialGradient id="nstgrm_gradient" r="150%" cx="30%" cy="107%">
          <stop stopColor="#fdf497" offset="0" />
          <stop stopColor="#fdf497" offset="0.05" />
          <stop stopColor="#fd5949" offset="0.45" />
          <stop stopColor="#d6249f" offset="0.6" />
          <stop stopColor="#285AEB" offset="0.9" />
        </radialGradient>
      </svg>
    </div>
  );
};

export default SocialMediaLink;
