|        URL         | HTTP Verb | Request Body  |                         Result                          |
|:------------------:|:---------:|:-------------:|:-------------------------------------------------------:|
| /api/clients       |    GET    |     empty     |                              Return JSON of all clients |
| /api/clients       |    POST   |     JSON      |            Create new client and returns JSON of client |
| /api/clients/:id   |    PUT    |     JSON      |   Update client matching `id` and return JSON of client |
| /api/jobs          |    GET    |     empty     |                                 Return JSON of all jobs |
| /api/jobs          |    POST   |     JSON      |                  Create new job and returns JSON of job |
| /api/jobs/:id      |    PUT    |     JSON      |    Update job with matching `id` and return JSON of job |
| /api/tasks         |    GET    | JSON (job id) |         Return JSON of all tasks with matching job `id` |
| /api/tasks         |    POST   | JSON (job id) |            Create new task and return all tasks for job |
| /api/tasks/:id     |    PUT    |     JSON      |       Update task matching `id` and return JSON of task |
| /api/employees     |    GET    |     empty     |                            Return JSON of all employees |
| /api/employees     |    POST   |     JSON      |        Create new employee and returns JSON of employee |
| /api/employees/:id |    PUT    |     JSON      |   Update employee with 'id' and return JSON of employee |