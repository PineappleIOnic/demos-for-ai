export default async ({ req, res, log, error }) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  log(req.bodyRaw);

  const response = await fetch(
    "https://tthyuff4cahyj9kj.eu-west-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + process.env.HF_API_KEY,
        "Content-Type": "image/jpeg",
      },
      method: "POST",
      body: req.bodyRaw,
    }
  );
  const result = await response.json();
  log(result);

  return res.json(result);
};
