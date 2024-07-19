import React from 'react';
import Modal from '../../../../../../shared/Modal';
import EditStage from '../../../../../../components/EditStage';
import useStages from '../../../../../Stages/hooks/useStages';

const Index = ({ handleClose, stageId }) => {
  const { data: stage } = useStages(stageId);
  return (
    <Modal handleClose={() => handleClose()} size={'lg'}>
      <EditStage stage={stage} />
    </Modal>
  );
};

export default Index;
