import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';

export default class Blog extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/product'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
              <h1>Our range of products</h1>

              <div className="post-feed">


              <table>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Availability</th>
                  <th>Tech Specs</th>
                  <th>Read More</th>
                  </tr>
               
              
              {_.map(display_posts, (post, post_idx) => (
                
                <tr key={post_idx} class="test">

<td class="post-card-thumbnail"><img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}></img>
                  </td>
                  <td><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></td>
                  
                 <td>{_.get(post, 'frontmatter.excerpt')}</td>
                 <td><Link to={safePrefix(_.get(post, 'frontmatter.subtitle'))} rel="bookmark">Link to Spec</Link></td>
                 <td><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">Read More</Link></td>
                </tr>
              ))}
              </table>

              
                  {_.map(display_posts, (post, post_idx) => (
              

                  <div key={post_idx}>
                    <div className="post-card-inside">
                      
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <div className="post-card-content">
                        <header className="post-header">
                          <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                        </header>
                        
                      
                      </div>
                    </div>
                  </div>
                  ))}
                </div>


                <div className="post-feed">
                  {_.map(display_posts, (post, post_idx) => (
                  <article key={post_idx} className="post post-card">
                    <div className="post-card-inside">
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </Link>
                      }
                      <div className="post-card-content">
                        <header className="post-header">
                          <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
                        </header>
                        
                      
                      </div>
                    </div>
                  </article>
                  ))}
                </div>
              </div>
            </div>
            </Layout>
        );
    }
}
