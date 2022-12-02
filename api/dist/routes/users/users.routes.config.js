"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route(`/users`)
            .get((req, res) => {
            res.status(200).send('User get endpoint to be implemented');
        })
            .post((req, res) => {
            res.status(200).send('User create endpoint to be implemented');
        });
        this.app.route(`/users/:userId`)
            .all((req, res, next) => {
            //Middleare function that calls next function after checks.
            next();
        })
            .get((req, res) => {
            res.status(200).send(`Get request issued for id ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`Put request issued for id ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`Patch request issued for id ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`Delete request issued for id ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JvdXRlcy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFvRTtBQUdwRSxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUFrQjtRQUMxQixLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBRSxDQUFDLEdBQWMsRUFBRSxHQUFlLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQzthQUNELElBQUksQ0FBRSxDQUFDLEdBQWMsRUFBRSxHQUFlLEVBQUUsRUFBRTtZQUN2QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDL0IsR0FBRyxDQUFFLENBQUMsR0FBYyxFQUFFLEdBQWUsRUFBRSxJQUFvQixFQUFFLEVBQUU7WUFDNUQsMkRBQTJEO1lBQzNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFFLENBQUMsR0FBYyxFQUFFLEdBQWUsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFFLENBQUMsR0FBYyxFQUFFLEdBQWUsRUFBRSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFFLENBQUMsR0FBYyxFQUFFLEdBQWUsRUFBRSxFQUFFO1lBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLCtCQUErQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFFLENBQUMsR0FBYyxFQUFFLEdBQWUsRUFBRSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBbkNELGtDQW1DQyJ9