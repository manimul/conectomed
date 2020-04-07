import React from 'react';
import _ from 'lodash';
import '../css/global.css';


import {htmlToReact, safePrefix} from '../utils';

export default class SectionTeams extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block team-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(this.props, 'section.title') && 
                <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                }
                {_.get(this.props, 'section.subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.teamMembers') && 
              
                <div className="team-layout inner">
                    
                    
                  {_.map(_.get(this.props, 'section.teamMembers'), (teamMember, teamMember_idx) => (
                  
                      <div key={teamMember_idx}  className="team-member block-item  md:flex  p-6 bg-white">
                          <div className="grid">
                    <div className="team-member-avatar  md:flex-shrink-0">
                    {_.get(teamMember, 'avatar') && 
                        <img className="team-member-avatar rounded-lg md:w-56" src={safePrefix(_.get(teamMember, 'avatar'))} alt="Author avatar"/>
                        }</div>
                    <div className="team-member-content mt-4 md:mt-0 md:ml-6 ">
                        <h3 className="team-member-name uppercase tracking-wide text-sm font-bold">{_.get(teamMember, 'name')}</h3>
                      <p className="tteam-member-text mt-2 text-gray-600">{htmlToReact(_.get(teamMember, 'bio'))}</p>
                      <footer className="team-member-footer">
                       
                    
                      </footer></div>
                    </div></div>
                  
                  ))}
                </div>
             
              }
            </section>
        );
    }
}
