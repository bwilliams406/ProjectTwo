
module.exports = function (sequelize, Sequelize) {

	const User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
		firstname: { type: Sequelize.STRING, notEmpty: true },
		lastname: { type: Sequelize.STRING, notEmpty: true },
		email: { type: Sequelize.STRING, validate: { isEmail: true } },
		password: { type: Sequelize.STRING, allowNull: false },
		admin: { type: Sequelize.BOOLEAN, defaultValue: false },
		last_login: { type: Sequelize.DATE },
		status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }

	});

	return User;

}
