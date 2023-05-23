import { Router, Request, Response } from "express";

const router = Router();

router.get("/ping", (req: Request, res: Response)=> {
    return res.status(200).json({pong: true});
}
);

export default router;