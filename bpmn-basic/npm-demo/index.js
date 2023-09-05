import BpmnViewer from 'bpmn-js';
import testDiagram from './test-diagram.bpmn';

var viewer = new BpmnViewer({
  container: '#canvas'
});

viewer.importXML(testDiagram, function(err) {
  if (!err) {
    console.log('success!');
    viewer.get('canvas').zoom('fit-viewport');
  } else {
    console.log('something went wrong:', err);
  }
});

