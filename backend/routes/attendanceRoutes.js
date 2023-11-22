import router from "./broadcastRoutes.js";
import {getAllAttendance, updateAttendance} from "../controllers/attendanceController.js";

router.route('/:instituteId/student/:studentId/attendance').post(updateAttendance);
router.route('/:instituteId/attendance').get(getAllAttendance);

export default router;