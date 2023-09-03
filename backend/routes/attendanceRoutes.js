import router from "./broadcastRoutes.js";
import {updateAttendance} from "../controllers/attendanceController.js";

router.route('/:instituteId/student/:studentId/attendance').post(updateAttendance);

export default router;