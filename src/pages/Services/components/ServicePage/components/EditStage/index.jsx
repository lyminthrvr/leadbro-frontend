import React, {useCallback} from 'react';
import Modal from '../../../../../../shared/Modal';
import EditStage from '../../../../../../components/EditStage';
import useStages from '../../../../../Stages/hooks/useStages';
import {useMemo} from 'react';
import {observer} from "mobx-react";
import {handleSubmit as handleSubmitSnackbar} from "../../../../../../utils/snackbar";
import useStagesApi from "../../../../../Stages/stages.api";

const Index = observer(({ handleClose, stageId }) => {
    const { data: stagesStore } = useStages();
    const api = useStagesApi();
    const handleChange = (name, payload, withId = true) => {
        stagesStore.changeById(stage.id, name, payload, withId);
    };

    const handleSubmit = useCallback(() => {
        handleSubmitSnackbar('Этап успешно отредактирован');
        stagesStore.submitDraft();
    }, []);

    const stage = useMemo(
        () => stagesStore.getById(+stageId),
        [stageId, stagesStore, stagesStore.stages, stagesStore.drafts],
    );
  return (
      stage &&
    <Modal handleClose={() => handleClose()} size={'lg'}>
      <EditStage stage={stage} onChange={handleChange} submit={handleSubmit} />
    </Modal>
  );
});

export default Index;
