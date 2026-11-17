import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Avatar } from "@/components/avatar";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { RESUME_DATA } from "@/data/resume-data";
import type { IconType } from "@/lib/types";

const CONTACT_ICONS: Record<
  IconType,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

interface ContactLink {
  label: string;
  text: string;
  href: string;
  icon: IconType;
  external?: boolean;
  screenOnly?: boolean;
}

export function Header() {
  const { name, about, location, contact, personalWebsiteUrl } = RESUME_DATA;
  const contactLinks: ContactLink[] = [
    ...(personalWebsiteUrl
      ? [
          {
            label: `个人网站：${new URL(personalWebsiteUrl).hostname}（在新标签页打开）`,
            text: new URL(personalWebsiteUrl).hostname,
            href: personalWebsiteUrl,
            icon: "globe" as const,
            external: true,
          },
        ]
      : []),
    ...(contact.email
      ? [
          {
            label: `发送邮件至 ${contact.email}`,
            text: contact.email,
            href: `mailto:${contact.email}`,
            icon: "mail" as const,
          },
        ]
      : []),
    ...(contact.tel
      ? [
          {
            label: `拨打电话 ${contact.tel}`,
            text: contact.tel,
            href: `tel:${contact.tel}`,
            icon: "phone" as const,
          },
        ]
      : []),
    ...contact.social.map((social) => ({
      label: `${social.name}（在新标签页打开）`,
      text: social.name,
      href: social.url,
      icon: social.icon,
      external: true,
      screenOnly: true,
    })),
  ];

  return (
    <header className="resume-header">
      <div className="resume-identity">
        <h1 id="resume-name">{name}</h1>
        <p className="resume-about">{about}</p>
        {location && (
          <p className="resume-location">
            <MapPinIcon aria-hidden="true" />
            {location}
          </p>
        )}
        <ul className="resume-contact" aria-label="联系方式">
          {contactLinks.map((link) => {
            const Icon = CONTACT_ICONS[link.icon];

            return (
              <li
                key={link.href}
                className={link.screenOnly ? "resume-social" : undefined}
              >
                <a
                  className="resume-icon-link"
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" focusable="false" />
                  <span className="resume-link-label">{link.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <Avatar
        className="resume-portrait"
        src={RESUME_DATA.avatarUrl}
        alt={`${name}的照片`}
        fallback={RESUME_DATA.initials}
      />
    </header>
  );
}
