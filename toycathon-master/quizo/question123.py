class Question:

    def __init__(self):
        self.points = 0

    def questioAttempt(self, marks):
        self.points += marks

    def result(self):
        return self.points