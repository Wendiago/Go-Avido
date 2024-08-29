import "./Background.scss";
import {
  Summary,
  Experience,
  Projects,
  Awards,
  Skills,
  Educations,
  ExperienceImage,
  Avatar,
} from "../../../assets";
import { SkillChart } from "./SkillChart/SkillChart";

export const Background = () => {
  return (
    <div className="profilepage-background__container">
      <div className="profilepage-background__summary">
        <div className="title">
          <img src={Summary} alt="Summary" />
          SUMMARY
        </div>
        <div className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="profilepage-background__experience">
        <div className="title">
          <img src={Experience} alt="Experience" />
          EXPERIENCE
        </div>
        <div className="content">
          <div className="detail">
            <div className="image">
              <img src={ExperienceImage} alt="ExperienceImage" />
            </div>
            <div className="group">
              <div className="position">Ux Designer</div>
              <div className="company">Divim Technology</div>
              <div className="time">May 2023 - Present (7 months)</div>
              <div className="separator"></div>
            </div>
          </div>

          <div className="detail">
            <div className="image">
              <img src={ExperienceImage} alt="ExperienceImage" />
            </div>
            <div className="group">
              <div className="position">Ux Designer</div>
              <div className="company">Divim Technology</div>
              <div className="time">May 2023 - Present (7 months)</div>
              <div className="separator"></div>
            </div>
          </div>

          <div className="detail">
            <div className="image">
              <img src={ExperienceImage} alt="ExperienceImage" />
            </div>
            <div className="group">
              <div className="position">Ux Designer</div>
              <div className="company">Divim Technology</div>
              <div className="time">May 2023 - Present (7 months)</div>
              <div className="separator"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilepage-background__projects">
        <div className="title">
          <img src={Projects} alt="Projects" />
          PROJECTS
        </div>
        <div className="content">
          <div className="detail">
            <div className="detail__header">
              <div className="project-name">Location Tracking App</div>
              <div className="project-time">April 2016-Present (7 months)</div>
            </div>
            <div className="detail__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="detail__member-title">Team Members</div>
            <div className="detail__members">
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
            </div>
            <div className="separator"></div>
          </div>

          <div className="detail">
            <div className="detail__header">
              <div className="project-name">Location Tracking App</div>
              <div className="project-time">April 2016-Present (7 months)</div>
            </div>
            <div className="detail__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="detail__member-title">Team Members</div>
            <div className="detail__members">
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
            </div>
            <div className="separator"></div>
          </div>

          <div className="detail">
            <div className="detail__header">
              <div className="project-name">Location Tracking App</div>
              <div className="project-time">April 2016-Present (7 months)</div>
            </div>
            <div className="detail__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="detail__member-title">Team Members</div>
            <div className="detail__members">
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
              <img src={Avatar} alt="team member" />
            </div>
            <div className="separator"></div>
          </div>
        </div>
      </div>
      <div className="profilepage-background__awards">
        <div className="title">
          <img src={Awards} alt="Awards" />
          HONORS & AWARDS
        </div>
        <div className="content">
          <div className="detail">
            <div className="detail__header">
              <div className="detail__header-field">Art Direction</div>
              <div className="detail__header-name">2013 MIDAS Awards</div>
              <div className="detail__header-time">December 2013</div>
            </div>
            <div className="detail__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </div>
            <div className="separator"></div>
          </div>

          <div className="detail">
            <div className="detail__header">
              <div className="detail__header-field">Art Direction</div>
              <div className="detail__header-name">2013 MIDAS Awards</div>
              <div className="detail__header-time">December 2013</div>
            </div>
            <div className="detail__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </div>
            <div className="separator"></div>
          </div>

          <div className="detail">
            <div className="detail__header">
              <div className="detail__header-field">Art Direction</div>
              <div className="detail__header-name">2013 MIDAS Awards</div>
              <div className="detail__header-time">December 2013</div>
            </div>
            <div className="detail__description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </div>
            <div className="separator"></div>
          </div>
        </div>
      </div>
      <div className="profilepage-background__skills">
        <div className="title">
          <img src={Skills} alt="Skills" />
          Skills
        </div>
        <div className="content">
          <div className="skillchart__container">
            <SkillChart
              skillName="Designing"
              skillPercentage={80}
              radius={40}
              strokeWidth={3}
            />
            <SkillChart
              skillName="Programming"
              skillPercentage={75}
              radius={40}
              strokeWidth={3}
            />
            <SkillChart
              skillName="HTML"
              skillPercentage={70}
              radius={40}
              strokeWidth={3}
            />
            <SkillChart
              skillName="CSS"
              skillPercentage={70}
              radius={40}
              strokeWidth={3}
            />
            <SkillChart
              skillName="SEO"
              skillPercentage={70}
              radius={40}
              strokeWidth={3}
            />
          </div>
          <div className="skillchart__otherskills">
            <div className="skillchart__otherskills-title">
              Vishnu also knows about
            </div>
            <div className="skillchart__otherskills-detail">
              <div className="skillbox">PHP</div>
              <div className="skillbox">Photoshop</div>
              <div className="skillbox">illustrator</div>
              <div className="skillbox">After Effects</div>
              <div className="skillbox">InDesign</div>
              <div className="skillbox">Photography</div>
            </div>
          </div>
        </div>
      </div>
      <div className="profilepage-background__education">
        <div className="title">
          <img src={Educations} alt="Educations" />
          Educations
        </div>
        <div className="content">
          <div className="detail">
            <div className="detail__header">
              <div className="detail__header-name">Rajasthan University</div>
              <div className="detail__header-field">MBA</div>
              <div className="detail__header-time">2011-2013</div>
            </div>
            <div className="detail__description">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
            <div className="separator"></div>
          </div>

          <div className="detail">
            <div className="detail__header">
              <div className="detail__header-name">Rajasthan University</div>
              <div className="detail__header-field">MBA</div>
              <div className="detail__header-time">2011-2013</div>
            </div>
            <div className="detail__description">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </div>
            <div className="separator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
