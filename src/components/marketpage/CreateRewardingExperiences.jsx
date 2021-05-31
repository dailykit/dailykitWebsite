import React, { PureComponent } from 'react'
import '../../style.css'
import paperplane from '../../paperplane.PNG'
export default class CreateRewardingExperiences extends PureComponent {
   render() {
      return (
         <>
            <div class='container' style={{ marginTop: '8rem' }}>
               <div class='row justify-content-between'>
                  <div class='col-md-6 col-xs-10'>
                     <img
                        src='https://dailykit-244-www.s3.us-east-2.amazonaws.com/file-export-5773385-1620227535366-0/dailykit-assets/marketing-overview/Creat%20rewarding%20experiances.png'
                        class='d-block w-100'
                        alt='...'
                     />
                  </div>
                  <div class='col-md-6 col-xs-10 trend-responsive'>
                     <img src={paperplane} width='120px' />
                     <h2 className='nunito market-heading '>
                        Create Rewarding Experiences.
                     </h2>
                     <p
                        style={{
                           fontSize: '16px'
                        }}
                     >
                        <div style={{ display: 'inline' }}>
                           Keep your customers coming back by{' '}
                           <b>rewarding them</b> when they take a certain
                           action. With <b>Loyalty Points,</b> retain and keep
                           your customers engaged.
                        </div>
                     </p>{' '}
                     <div class='row justify-content-evenly'>
                        <div
                           class='col-5 p-4'
                           style={{
                              boxShadow: '0 0 10px 0px rgba(0, 0, 0, 0.3)'
                           }}
                        >
                           <h1
                              style={{ color: '#4FD153', fontWeight: 'bolder' }}
                           >
                              01
                           </h1>
                           <h4 style={{ fontWeight: 'bold' }}>
                              Simple. Powerful. Fast
                           </h4>
                        </div>
                        <div
                           class='col-5 p-4'
                           style={{
                              boxShadow: '0 0 10px 0px rgba(0, 0, 0, 0.3)'
                           }}
                        >
                           <h1
                              style={{ color: '#4FD153', fontWeight: 'bolder' }}
                           >
                              02
                           </h1>
                           <h4 style={{ fontWeight: 'bold' }}>ROI-Focused</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
