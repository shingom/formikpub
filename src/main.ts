import * as Formik from 'formik';

interface Window {
  formik: any
}
declare var window: Window

window.formik = Formik;

