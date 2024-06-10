//import React from 'react'
import { useEffect, useRef } from 'react';
import styles from '../css/detail.module.scss';
import { IContactCard } from '../models/ContactCard';

interface IContactDetailProps {
  show: boolean, 
  onClose: () => (void),
  item: IContactCard
}

function ContactDetail({show, onClose, item}: IContactDetailProps) {
  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside);
    document.body.addEventListener('keydown', handleEscKeyDown);

    return(() => {
      document.body.removeEventListener('mousedown', handleClickOutside);
      document.body.removeEventListener('keydown', handleEscKeyDown);
    });

  }, [show]);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside  = (e: MouseEvent) => {
    if (show && e.target && modalRef.current && !modalRef.current.contains(e.target as HTMLDivElement) && onClose) {
        e.stopPropagation();
        onClose();
    }
  };

  const handleEscKeyDown = (e: KeyboardEvent) => {
    if (show && e.code == 'Escape' && onClose) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  }

  if (!show) {
    return <></>
  }
  
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div ref={modalRef} className={styles.modalContent}>
          <div className={styles.profileSection}>
            <div className={styles.flexColumn}>
              <div className={styles.headerRow}>
                <h2 className={styles.nameTitle}>{item.name}</h2>
                <img className={styles.profileImage} src={'/assets/close_icon.svg'} onClick={handleCloseClick} alt="Закрыть" />
              </div>

              <div className={styles.contactGrid}>
                <h4 className={styles.phoneLabel}>Телефон:</h4>
                <h5 className={styles.phoneNumber}>{item.phone}</h5>
                <h4 className={styles.emailLabel}>Почта:</h4>
                <h5 className={styles.emailAddress}>{item.email}</h5>
                <h4 className={styles.hireDateLabel}>Дата приема:</h4>
                <h5 className={styles.hireDate}>{item.hire_date}</h5>
                <h4 className={styles.positionLabel}>Должность:</h4>
                <h5 className={styles.positionName}>{item.position_name}</h5>
                <h4 className={styles.departmentLabel}>Подразделение:</h4>
                <h5 className={styles.departmentName}>{item.department}</h5>
              </div>

              <h4 className={styles.additionalInfoLabel}>Дополнительная информация:</h4>
              <h5 className={styles.additionalInfoText}>
                <div>{item.address}</div>
                Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве
                заполнителя макта страницы.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetail