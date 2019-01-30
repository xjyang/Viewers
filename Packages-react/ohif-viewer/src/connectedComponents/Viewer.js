import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import OHIF from 'ohif-core';
//import { CineDialog } from 'react-viewerbase';

import WhiteLabellingContext from '../WhiteLabellingContext.js';
import Header from '../components/Header';
import ConnectedFlexboxLayout from './ConnectedFlexboxLayout.js';
import ConnectedToolbarRow from './ConnectedToolbarRow';
import ConnectedStudyLoadingMonitor from './ConnectedStudyLoadingMonitor.js';
import StudyPrefetcher from '../components/StudyPrefetcher.js';
import './Viewer.css';

/**
 * Inits OHIF Hanging Protocol's onReady.
 * It waits for OHIF Hanging Protocol to be ready to instantiate the ProtocolEngine
 * Hanging Protocol will use OHIF LayoutManager to render viewports properly
 */
/*const initHangingProtocol = () => {
    // When Hanging Protocol is ready
    HP.ProtocolStore.onReady(() => {

        // Gets all StudyMetadata objects: necessary for Hanging Protocol to access study metadata
        const studyMetadataList = OHIF.viewer.StudyMetadataList.all();

        // Instantiate StudyMetadataSource: necessary for Hanging Protocol to get study metadata
        const studyMetadataSource = new OHIF.studies.classes.OHIFStudyMetadataSource();

        // Get prior studies map
        const studyPriorsMap = OHIF.studylist.functions.getStudyPriorsMap(studyMetadataList);

        // Creates Protocol Engine object with required arguments
        const ProtocolEngine = new HP.ProtocolEngine(layoutManager, studyMetadataList, studyPriorsMap, studyMetadataSource);

        // Sets up Hanging Protocol engine
        HP.setEngine(ProtocolEngine);
    });
};*/

/*const viewportUtils = OHIF.viewerbase.viewportUtils;

OHIF.viewer.functionList = {
    toggleCineDialog: viewportUtils.toggleCineDialog,
    toggleCinePlay: viewportUtils.toggleCinePlay,
    clearTools: viewportUtils.clearTools,
    resetViewport: viewportUtils.resetViewport,
    invert: viewportUtils.invert
};*/

class Viewer extends Component {
  static propTypes = {
    studies: PropTypes.array
  };

  render() {
    return (
      <>
        <WhiteLabellingContext.Consumer>
          {whiteLabelling => (
            <Header home={false}>{whiteLabelling.logoComponent}</Header>
          )}
        </WhiteLabellingContext.Consumer>
        <div id="viewer" className="Viewer">
          <ConnectedToolbarRow />
          <ConnectedStudyLoadingMonitor studies={this.props.studies} />
          <StudyPrefetcher studies={this.props.studies} />
          <ConnectedFlexboxLayout studies={this.props.studies} />
        </div>
      </>
    );
  }
}

export default Viewer;
