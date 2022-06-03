import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import cx from 'classnames';

import styles from './AddNewStationForm.module.scss';
import { StationsContext } from '../../context/StationsContext';

export const AddNewStationForm = () => {
  const {
    setIsModalOpen,
    radioStationsListLS,
    setRadioStationsListLS,
    addNewRadioStation,
  } = useContext(StationsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: 'onChange' });

  const stationUrlValue = getValues('stationUrl');
  const stationName = getValues('stationName');

  const onSubmit = (data, e) => {
    addNewRadioStation(
      data,
      setIsModalOpen,
      radioStationsListLS,
      setRadioStationsListLS
    );
  };

  return (
    <div className={styles.addNewStationModal}>
      <p>Add new radio station</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.InputWrapper}>
          <input
            className={styles.textInput}
            aria-describedby="stationNameErrorMessage"
            id="stationName"
            type="text"
            {...register('stationName', {
              required: 'required',
              minLength: {
                value: 3,
                message: 'too short station name',
              },
            })}
          ></input>
          <label
            className={cx(styles.Label, stationName && styles.hide)}
            htmlFor="stationName"
          >
            Name
          </label>
        </div>
        <div id="stationNameErrorMessage" className={styles.errorMessage}>
          {errors.stationName?.message}
        </div>

        <div className={styles.InputWrapper}>
          <input
            className={styles.textInput}
            id="stationUrl"
            aria-describedby="stationUrlErrorMessage"
            type="text"
            {...register('stationUrl', {
              required: 'required',
              pattern: {
                value: /^https?:\/\/.*[\\/].+\.(mp3|acc|ogg|m4u|m4a)$/,
                message: 'invalid email address',
              },
            })}
          ></input>
          <label
            className={cx(styles.Label, stationUrlValue && styles.hide)}
            htmlFor="stationUrl"
          >
            Station Stream URL...
          </label>
        </div>
        <div id="stationUrlErrorMessage" className={styles.errorMessage}>
          {errors.stationUrl?.message}
        </div>
        <div>
          <input className={styles.submitInput} type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};
