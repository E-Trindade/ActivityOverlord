/**
 * PublicationController
 *
 * @description :: Server-side logic for managing publications
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: (req, res) => {
		new_publication = req.body;
		new_publication.author = req.token.user_id;

		Publication.create(new_publication).exec(
			(err, publication) => {
				if (err)
					return res.negotiate(err);
				return res.ok(publication);
			})
	},

	userfeed: (req, res) => {
		Publication.find({})
			.sort('updatedAt DESC')
			.paginate({
				page: req.param('page'),
				limit: 10
			})
			.exec(
				(err, publications) => {
					if (err)
						res.negotiate(err);
					return res.json(publications);
				})
	}

};