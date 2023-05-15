"""empty message

Revision ID: f333a3839c90
Revises: fb060a24643d
Create Date: 2023-05-11 15:39:38.230965

"""
from alembic import op
import sqlalchemy as sa
import sqlalchemy_utils


# revision identifiers, used by Alembic.
revision = 'f333a3839c90'
down_revision = 'fb060a24643d'
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
        UPDATE counter
        SET count = 1000
        """
    )


def downgrade():
    op.execute(
        """
        UPDATE counter
        SET count = 0
        """
    )
