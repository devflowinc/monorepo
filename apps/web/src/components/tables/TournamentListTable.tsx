/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { BsJournalBookmark } from 'react-icons/bs'
import { Tournament, TournamentResult, Circuit, Alias, School, TournamentSpeakerResult } from '@shared/database'
import { Table, Card } from '@shared/components'
import TournamentSummaryTable from './TournamentSummaryTable'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'

export type ExpandedTournamentSpeakerResult = TournamentSpeakerResult & {
  competitor: {
    name: string
  }
};

export type ExpandedTournamentResult = TournamentResult & {
  tournament: Tournament & {
    circuits: Circuit[];
  };
  alias: Alias;
  school: School;
  speaking: ExpandedTournamentSpeakerResult[];
};

export interface TournamentListTableProps {
  data: ExpandedTournamentResult[]
}

const TournamentListTable = ({ data }: TournamentListTableProps) => {
  const column = createColumnHelper<ExpandedTournamentResult>();

  return (
    <Card icon={<BsJournalBookmark />} title="Tournament History" className="max-w-[800px] mx-auto my-16">
      <Table
        data={data}
        columnConfig={{
          core: [
            column.accessor('tournament.name', {
              header: "Name",
              cell: props => props.cell.getValue(),
            }),
            column.accessor('tournament.start', {
              header: "Date",
              cell: props => new Date(props.cell.getValue() * 1000).toLocaleDateString("en-us")
            }),
            column.display({
              header: "P.RK",
              cell: props => `${props.row.original.prelimPos}/${props.row.original.prelimPoolSize}`
            }),
          ] as ColumnDef<ExpandedTournamentResult>[],
          sm: [
            column.display({
              header: "P.RC",
              cell: props => {
                const won = props.row.original.prelimBallotsWon;
                const lost = props.row.original.prelimBallotsLost;
                return `${won}-${lost} (${Math.trunc(won/(won+lost))}%)`
              }
            }),
            column.display({
              header: "E.RC",
              cell: props => {
                const won = props.row.original.elimWins || 0;
                const lost = props.row.original.elimLosses || 0;
                if (won + lost == 0) return '--';
                return `${won}-${lost} (${Math.trunc(won / (won + lost))}%)`;
              }
            }),
            column.display({
              header: "Bid",
              cell: props => {
                let bid = props.row.original.bid;
                let isGhostBid = props.row.original.isGhostBid;
                if (!bid) return '--';
                return `${bid == 1 ? 'Full' : 'Partial'} ${isGhostBid ? '(ghost)' : ''}`;
              }
            }),
          ] as ColumnDef<ExpandedTournamentResult>[],
          lg: [
            column.accessor('opWpm', {
              header: "OpWpM",
              cell: props => props.cell.getValue(),
            }),
          ] as ColumnDef<ExpandedTournamentResult>[],
        }}
        child={TournamentSummaryTable}
      />
    </Card>
  )
}

export default TournamentListTable
