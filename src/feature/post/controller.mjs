// 요청을 받아서 컨트롤러를 통해서 DB와 소통을 할 수도 있고 클라리언트에게 응답해줄 수도 있다. 

import { postCreateOne, postDeleteOne, postFindMany, postFindOne, postUpdateOne } from "./model.mjs";

// 2. getAll함수 실행
export const getAll = async (req, res) => {
  try {
    // postFindMany 실행(model에 만들어둠)
    const result = await postFindMany();
    if (!result) return res.status(404).json({ error: "Not Found " });
    return res.json({ data: result });
  } catch (e) {
    return res.status(500).json({ error: e.stack });
  }
};

export const getOne = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(404).json({ error: "Not Found" });

  try {
    const result = await postFindOne(id);
    return res.json({ data: result });
  } catch (e) {
    return res.json({ error: e.stack });
  }
};

export const createOne = async (req, res) => {
  const body = req.body
  if (!body) return res.status(400).json({ error: "Bad Request" });

  try {
    const result = await postCreateOne(body);
    return res.json({ data: result });
  } catch (e) {
    return res.json({ error: e.stack });
  }
}

export const updateOne = async (req, res) => {
  const body = req.body
  const id = req.params.id
  if (!body) return res.status(400).json({ error: "Bad Request" });

  try {
    const result = await postUpdateOne(Number(id), body);
    return res.json({ data: result });
  } catch (e) {
    return res.json({ error: e.stack });
  }
}


export const deleteOne = async (req, res) => {
  const id = Number(req.params.id);
  if (!id) return res.status(404).json({ error: "Not Found" });

  try {
    const result = await postDeleteOne(id);
    return res.json({ data: result });
  } catch (e) {
    return res.json({ error: e.stack });
  }
};
