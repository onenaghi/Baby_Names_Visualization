
def create_classes(db):
    class names(db.Model):
        __tablename__ = 'baby_names'

        state = db.Column(db.String(64))
        sex = db.Column(db.String(10))
        year = db.Column(db.Float)
       Name = db.Column(db.String(64))
        Number = db.Column(db.Float)
        

        def __repr__(self):
            return '<names %r>' % (self.name)
    return names